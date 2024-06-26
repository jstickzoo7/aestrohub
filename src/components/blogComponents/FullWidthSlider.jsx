import React from "react";
import {
  Box,
  Chip,
  alpha,
  Grid,
  CardMedia,
  Typography,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  useMediaQuery,
} from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";
import { truncateContent } from "@/utils/postTruncator";
import { capitalizeWords } from "@/utils/capitalizeWord";
import { formatBlogDate } from "@/utils/dateFormatter";
import Reveal from "@/utils/motion/Reveal";
import Link from "next/link";

const FullWidthSlider = ({ latestPost }) => {
  // Determine the number of words to truncate based on screen size
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const truncateLength = isMobile ? 15 : 45;

  const { slug, title, createdAt, content, author, featuredImage } = latestPost;
  const truncatedSummary = truncateContent(content.html, truncateLength);
  return (
    <React.Fragment>
      <Reveal>
        <Box
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
            label="AestroBlog"
          />
          <Typography
            mb={3}
            variant="h2"
            sx={{ fontSize: { xs: "32px", md: "56px" } }}
          >
            Read our latest Articles
          </Typography>
        </Box>
      </Reveal>
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          p: { xs: 1, md: 4 },
          //   height: "775px",
          border: "1px solid #5c5c5c",
          borderRadius: "30px",
          bgcolor: alpha("#fff", 0.1),
        }}
      >
        <Box>
          <Link href={`/blog/${slug}`}>
            <CardMedia
              sx={{
                height: { xs: "220px", md: "429px" },
                borderRadius: "16px",
                objectFit: "contain",
              }}
              image={featuredImage.url}
              title="Article Image"
            />
          </Link>
          <Box>
            <Grid container direction="column" spacing={{ xs: 0, md: 2 }}>
              <Grid
                container
                item
                xs={12}
                md={6}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                m={{ xs: "0px 5px 5px", md: "0" }}
              >
                {isMobile && (
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar
                        alt={author.name}
                        src={author.photo.url}
                        sx={{ height: "60px", width: "60px" }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ pl: 3 }}
                      primary={
                        <Typography
                          variant="customBody"
                          color="#fff"
                          textAlign="left"
                          sx={{ fontSize: { xs: 17, md: 22 } }}
                        >
                          {capitalizeWords(author.name)}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: 1,
                            fontSize: { xs: 15, md: 20 },
                            color: "grey.lightActive",
                          }}
                        >
                          <span style={{ marginTop: "3px" }}>
                            <FaCalendarAlt />
                          </span>
                          <span>{formatBlogDate(createdAt)}</span>
                        </Typography>
                      }
                    />
                  </ListItem>
                )}
                <Typography
                  gutterBottom
                  variant="customBody"
                  textAlign="left"
                  lineHeight={1.2}
                  sx={{
                    fontSize: { xs: "30", md: "30px" },
                    marginY: { xs: 0, md: 1 },
                  }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "#fff" }}
                    href={`/blog/${slug}`}
                  >
                    {title}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Typography
                    variant="body2"
                    textAlign="left"
                    mb={1}
                    sx={{
                      color: "grey.lightActive",
                      fontSize: { xs: "15px", md: "20px" },
                    }}
                  >
                    {truncatedSummary}
                  </Typography>
                  {!isMobile && (
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <Avatar
                          alt={author.name}
                          src={author.photo.url}
                          sx={{ height: "60px", width: "60px" }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ pl: 3 }}
                        primary={
                          <Typography
                            variant="customBody"
                            color="#fff"
                            textAlign="left"
                            sx={{ fontSize: { xs: 17, md: 22 } }}
                          >
                            {capitalizeWords(author.name)}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            sx={{
                              textAlign: "left",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: 1,
                              fontSize: { xs: 15, md: 20 },
                              color: "grey.lightActive",
                            }}
                          >
                            <span style={{ marginTop: "3px" }}>
                              <FaCalendarAlt />
                            </span>
                            <span>{formatBlogDate(createdAt)}</span>
                          </Typography>
                        }
                      />
                    </ListItem>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FullWidthSlider;
