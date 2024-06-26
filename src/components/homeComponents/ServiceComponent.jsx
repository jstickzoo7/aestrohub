import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { responsive } from "@/data/CarouselResponsive";
import Services from "./Services";
import ScrollReveal from "@/utils/motion/ScrollReveal";
import Reveal from "@/utils/motion/Reveal";

const ServiceComponent = () => {
  return (
    <React.Fragment>
      <Reveal>
        <Box
          textAlign="center"
          width={{ xs: "100%", md: "65%" }}
          sx={{ margin: "100px auto 5px", textAlign: "center" }}
        >
          <Chip
            sx={{
              bgcolor: "#fff",
              fontSize: "18px",
              fontFamily: "Outfit",
              color: "#0EAD69",
              padding: "5px",
              mb: "20px",
            }}
            icon={
              <CardMedia
                component="img"
                image="/icons/Saturn.webp"
                sx={{
                  width: 24,
                  height: 24,
                  objectFit: "contain",
                }}
                alt="icon"
              />
            }
            label="What we do"
          />
          <Typography
            mb={3}
            variant="h2"
            sx={{ fontSize: { xs: "32px", md: "56px" } }}
          >
            Our Services
          </Typography>
        </Box>
      </Reveal>
      {/* desktop or larger devices */}
      <Box
        sx={{
          display: { xs: "none", md: "flex"},
          flexDirection: "column",
          gap: "20px",
          borderRadius: "40px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {services.map((service, index) => (
          <Services
            type={index % 2 === 0 ? "first" : "second"}
            button
            key={index}
            service={service}
          />
        ))}
      </Box>
      {/* mobile devices */}
      <ScrollReveal type="first">
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {services.map((service) => (
              <div key={service.id}>
                <ServiceCard button data={service} />
              </div>
            ))}
          </Carousel>
        </Box>
      </ScrollReveal>
    </React.Fragment>
  );
};

export default ServiceComponent;
