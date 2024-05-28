import HeadLine from "components/headline";
import NavBar from "components/navbar";

export default function NewHome() {
  return (
    <div
      className="HomeDesktop"
      style={{
        background: "#171023",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <NavBar />
      <div
        className="Main"
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
        }}
      >
        <HeadLine />
        <div
          className="Graphic"
          style={{
            width: 121.07,
            height: 33.71,
            transform: "rotate(135deg)",
            transformOrigin: "0 0",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Vector"
            style={{ width: 121.09, height: 33.69, background: "#7DFFAF" }}
          ></div>
        </div>
        <div
          className="AboutSection"
          style={{
            alignSelf: "stretch",
            padding: 40,
            background: "#171023",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 136,
            display: "inline-flex",
          }}
        >
          <div
            className="Container"
            style={{
              flex: "1 1 0",
              height: 540,
              padding: 72,
              background: "#2C243B",
              borderRadius: 16,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 136,
              display: "flex",
            }}
          >
            <div
              className="DesignerGirlBro"
              style={{
                width: 488,
                height: 396,
                position: "relative",
                transform: "rotate(180deg)",
                transformOrigin: "0 0",
              }}
            ></div>
            <div
              className="Container"
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32,
                display: "inline-flex",
              }}
            >
              <div
                className="TechStack"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Javascript"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Frame"
                    style={{
                      width: 24,
                      height: 24,
                      position: "relative",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 23.47,
                        height: 23.47,
                        background: "#9955E8",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 15.45,
                        height: 10.97,
                        background: "#2C243B",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="React"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 16,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Frame"
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingLeft: 0.26,
                      paddingRight: 0.26,
                      paddingTop: 1.52,
                      paddingBottom: 1.52,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="Group"
                      style={{
                        width: 23.47,
                        height: 20.96,
                        position: "relative",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 4.28,
                          height: 4.28,
                          left: 9.6,
                          top: 8.34,
                          position: "absolute",
                          background: "#9955E8",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 23.47,
                          height: 20.96,
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "#9955E8",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="NodeJs"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Frame"
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingTop: 0.66,
                      paddingBottom: 0.66,
                      paddingLeft: 1.88,
                      paddingRight: 2.06,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 20.06,
                        height: 22.67,
                        background: "#9955E8",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Tailwind"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Frame"
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingTop: 4.8,
                      paddingBottom: 4.8,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{ width: 24, height: 14.4, background: "#9955E8" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Python"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 16,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Frame"
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingLeft: 0.65,
                      paddingRight: 0.65,
                      paddingTop: 0.53,
                      paddingBottom: 0.53,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 22.69,
                        height: 22.94,
                        background: "#9955E8",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="Container"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  className="Headline"
                  style={{
                    height: 88,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    className="AboutMe"
                    style={{
                      color: "#7DFFAF",
                      fontSize: 16,
                      fontFamily: "Kalam",
                      fontWeight: "400",
                      lineHeight: 16,
                      wordWrap: "break-word",
                    }}
                  >
                    About me
                  </div>
                  <div
                    className="IMAPassionateSoftwareDeveloperLookingForMyFirstInternationalOppotunity"
                    style={{
                      width: 514.2,
                      color: "#F5F6F6",
                      fontSize: 24,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      lineHeight: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    I’m a passionate software developer looking for my first
                    international oppotunity
                  </div>
                </div>
                <div
                  className="BeyondCodingIMACoffeeEnthusiastACatLoverAndASelfTaughtArtistWhoEnjoysSpendingMyFreeTimeDoodlingIAmCurrentlySeekingOpportunitiesToBringMySkillsAndEnthusiasmToATechCompanyInTheUnitedStatesOrEuropeAndAmExcitedAboutTheProspectOfRelocatingToPursueNewChallenges"
                  style={{
                    width: 592,
                    color: "#CDD0D4",
                    fontSize: 16,
                    fontFamily: "Heebo",
                    fontWeight: "400",
                    lineHeight: 24,
                    wordWrap: "break-word",
                  }}
                >
                  Beyond coding, I'm a coffee enthusiast, a cat lover, and a
                  self-taught artist who enjoys spending my free time doodling.
                  I am currently seeking opportunities to bring my skills and
                  enthusiasm to a tech company in the United States or Europe
                  and am excited about the prospect of relocating to pursue new
                  challenges.
                </div>
              </div>
              <div
                className="Button"
                style={{
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 16,
                  paddingBottom: 16,
                  background: "#8A42DB",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Readcvlogo"
                  style={{
                    width: 24,
                    height: 24,
                    paddingLeft: 3,
                    paddingRight: 3,
                    paddingTop: 1.5,
                    paddingBottom: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Vector"
                    style={{ width: 18, height: 21, background: "#F5F6F6" }}
                  ></div>
                </div>
                <div
                  className="Label"
                  style={{
                    flex: "1 1 0",
                    textAlign: "center",
                    color: "#F5F6F6",
                    fontSize: 16,
                    fontFamily: "Heebo",
                    fontWeight: "500",
                    lineHeight: 24,
                    wordWrap: "break-word",
                  }}
                >
                  My resume
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ProjectsSection"
          style={{
            alignSelf: "stretch",
            height: 680,
            paddingLeft: 112,
            paddingRight: 112,
            paddingTop: 72,
            paddingBottom: 72,
            background: "#171023",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 40,
            display: "flex",
          }}
        >
          <div
            className="Headline"
            style={{
              height: 56,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              className="Projects"
              style={{
                color: "#7DFFAF",
                fontSize: 16,
                fontFamily: "Kalam",
                fontWeight: "400",
                lineHeight: 16,
                wordWrap: "break-word",
              }}
            >
              Projects
            </div>
            <div
              className="TakeALookAtMyHighlightedProjects"
              style={{
                alignSelf: "stretch",
                textAlign: "center",
                color: "#F5F6F6",
                fontSize: 24,
                fontFamily: "Heebo",
                fontWeight: "500",
                lineHeight: 32,
                wordWrap: "break-word",
              }}
            >
              Take a look at my highlighted projects
            </div>
          </div>
          <div
            className="Graphic"
            style={{ width: 62.48, height: 64, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 0.96,
                height: 24.88,
                left: 30.72,
                top: 1.16,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.97,
                height: 28.26,
                left: 30.68,
                top: 34.65,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24.02,
                height: 3.59,
                left: 0.86,
                top: 32.19,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 25.28,
                height: 3.12,
                left: 36.01,
                top: 27.66,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 2.72,
                height: 4.94,
                left: 37.59,
                top: 21.69,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 3.31,
                height: 3.27,
                left: 21.82,
                top: 38.59,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 3.29,
                height: 2.22,
                left: 40.1,
                top: 37.31,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.11,
                height: 4.18,
                left: 13.92,
                top: 19.55,
                position: "absolute",
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
          </div>
          <div
            className="Project"
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 32,
              display: "inline-flex",
            }}
          >
            <div
              className="ProjectCard"
              style={{
                flex: "1 1 0",
                alignSelf: "stretch",
                padding: 24,
                background: "#2C243B",
                borderRadius: 16,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <div
                className="Info"
                style={{
                  alignSelf: "stretch",
                  height: 272,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <img
                  className="ProjectImage"
                  style={{
                    alignSelf: "stretch",
                    height: 160,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                  src="https://via.placeholder.com/336x160"
                />
                <div
                  className="Section"
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="JulDec2022"
                    style={{
                      color: "#CDD0D4",
                      fontSize: 14,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Jul - Dec 2022
                  </div>
                  <div
                    className="Techs"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 16,
                      display: "flex",
                    }}
                  >
                    <div
                      className="Javascript"
                      style={{
                        width: 24,
                        height: 24,
                        padding: 0.26,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <img
                        className="Vector"
                        style={{ width: 23.47, height: 23.47 }}
                        src="https://via.placeholder.com/23x23"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="Frame1054"
                  style={{
                    alignSelf: "stretch",
                    height: 56,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    className="NomeDoProjeto"
                    style={{
                      alignSelf: "stretch",
                      color: "#F5F6F6",
                      fontSize: 20,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    DevLinks
                  </div>
                  <div
                    className="LoremIpsumDolorSitAmetConsecteturNuncEuismodVenenatisAliquamConsequatNisiFacilisiSedAcDiamScelerisqueNisiVariusSuscipitCongueEgetNuncNequeMiPlaceratEnimOrciArcuHabitasseMorbi"
                    style={{
                      alignSelf: "stretch",
                      color: "#F5F6F6",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    A link agragator for social media.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ProjectCard"
              style={{
                flex: "1 1 0",
                padding: 24,
                background: "#2C243B",
                borderRadius: 16,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <div
                className="Info"
                style={{
                  alignSelf: "stretch",
                  height: 296,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <img
                  className="ProjectImage"
                  style={{
                    alignSelf: "stretch",
                    height: 160,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                  src="https://via.placeholder.com/336x160"
                />
                <div
                  className="Section"
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="JulDec2022"
                    style={{
                      color: "#CDD0D4",
                      fontSize: 14,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Jul - Dec 2022
                  </div>
                  <div
                    className="Techs"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 16,
                      display: "flex",
                    }}
                  >
                    <div
                      className="Tailwind"
                      style={{
                        width: 24,
                        height: 24,
                        paddingTop: 4.8,
                        paddingBottom: 4.8,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 24,
                          height: 14.4,
                          background: "#9955E8",
                        }}
                      ></div>
                    </div>
                    <div
                      className="Python"
                      style={{
                        width: 24,
                        height: 24,
                        paddingLeft: 0.65,
                        paddingRight: 0.65,
                        paddingTop: 0.53,
                        paddingBottom: 0.53,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 22.69,
                          height: 22.94,
                          background: "#9955E8",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="Frame1054"
                  style={{
                    alignSelf: "stretch",
                    height: 80,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    className="NomeDoProjeto"
                    style={{
                      alignSelf: "stretch",
                      color: "#F5F6F6",
                      fontSize: 20,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Feedback Widget
                  </div>
                  <div
                    className="LoremIpsumDolorSitAmetConsecteturNuncEuismodVenenatisAliquamConsequatNisiFacilisiSedAcDiamScelerisqueNisiVariusSuscipitCongueEgetNuncNequeMiPlaceratEnimOrciArcuHabitasseMorbi"
                    style={{
                      alignSelf: "stretch",
                      color: "#F5F6F6",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    A feedback widget to improve your applications based on
                    users feedback.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ProjectCard"
              style={{
                flex: "1 1 0",
                padding: 24,
                background: "#2C243B",
                borderRadius: 16,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 24,
                display: "inline-flex",
              }}
            >
              <div
                className="Info"
                style={{
                  alignSelf: "stretch",
                  height: 296,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <img
                  className="ProjectImage"
                  style={{
                    alignSelf: "stretch",
                    height: 160,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                  src="https://via.placeholder.com/336x160"
                />
                <div
                  className="Section"
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="JulDec2022"
                    style={{
                      color: "#CDD0D4",
                      fontSize: 14,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Jul - Dec 2022
                  </div>
                  <div
                    className="Techs"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 16,
                      display: "flex",
                    }}
                  >
                    <div
                      className="React"
                      style={{
                        width: 24,
                        height: 24,
                        paddingLeft: 0.26,
                        paddingRight: 0.26,
                        paddingTop: 1.52,
                        paddingBottom: 1.52,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <img
                        className="Vector"
                        style={{ width: 23.47, height: 20.96 }}
                        src="https://via.placeholder.com/23x21"
                      />
                    </div>
                    <div
                      className="NodeJs"
                      style={{
                        width: 24,
                        height: 24,
                        paddingTop: 0.66,
                        paddingBottom: 0.66,
                        paddingLeft: 1.88,
                        paddingRight: 2.06,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 20.06,
                          height: 22.67,
                          background: "#9955E8",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="Frame1054"
                  style={{
                    alignSelf: "stretch",
                    height: 80,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    className="NomeDoProjeto"
                    style={{
                      alignSelf: "stretch",
                      color: "#F5F6F6",
                      fontSize: 20,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Nutritional table
                  </div>
                  <div
                    className="LoremIpsumDolorSitAmetConsecteturNuncEuismodVenenatisAliquamConsequatNisiFacilisiSedAcDiamScelerisqueNisiVariusSuscipitCongueEgetNuncNequeMiPlaceratEnimOrciArcuHabitasseMorbi"
                    style={{
                      alignSelf: "stretch",
                      color: "#F5F6F6",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    An app to improve your eating habits based on the
                    nutritional values.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="Graphic"
            style={{
              width: 45,
              height: 95,
              paddingLeft: 4.47,
              paddingRight: 4.47,
              paddingTop: 7.5,
              paddingBottom: 7.5,
              transform: "rotate(15deg)",
              transformOrigin: "0 0",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="Vector"
              style={{
                width: 36.05,
                height: 80,
                border: "1.50px #7DFFAF solid",
              }}
            ></div>
          </div>
          <div
            className="Button"
            style={{
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 16,
              paddingBottom: 16,
              background: "#413A4F",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              className="Label"
              style={{
                flex: "1 1 0",
                textAlign: "center",
                color: "#F5F6F6",
                fontSize: 16,
                fontFamily: "Heebo",
                fontWeight: "500",
                lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              See all
            </div>
            <div
              className="Arrowright"
              style={{
                width: 24,
                height: 24,
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 4.5,
                paddingBottom: 4.5,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                className="Vector"
                style={{ width: 18, height: 15, background: "#F5F6F6" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="ContactSection"
          style={{
            alignSelf: "stretch",
            padding: 40,
            background: "#171023",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 136,
            display: "inline-flex",
          }}
        >
          <div
            className="Container"
            style={{
              flex: "1 1 0",
              height: 528,
              padding: 72,
              background: "#2C243B",
              borderRadius: 16,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 136,
              display: "flex",
            }}
          >
            <div
              className="Div"
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 40,
                display: "inline-flex",
              }}
            >
              <div
                className="CuteAvatar"
                style={{ width: 160, height: 160, position: "relative" }}
              >
                <div
                  className="Ellipse1"
                  style={{
                    width: 159.48,
                    height: 159.48,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#D9D9D9",
                    borderRadius: 9999,
                  }}
                />
                <div
                  className="Body"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 110.17,
                    paddingBottom: 0.2,
                    paddingLeft: 21.28,
                    paddingRight: 31.45,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="RevisedShoulder1"
                    style={{
                      width: 107.27,
                      height: 49.63,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 104.72,
                        height: 48.16,
                        left: 0.92,
                        top: 0.31,
                        position: "absolute",
                        background: "white",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 107.27,
                        height: 49.63,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Outfit"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 108.35,
                    paddingLeft: 10.82,
                    paddingRight: 26.54,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Outfit231"
                    style={{
                      width: 122.64,
                      height: 75.38,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Group"
                      style={{
                        width: 122.64,
                        height: 75.28,
                        left: 0,
                        top: 0,
                        position: "absolute",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 119.44,
                          height: 72.73,
                          left: 1.26,
                          top: 1.24,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 122.64,
                          height: 75.28,
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                    </div>
                    <div
                      className="Group"
                      style={{
                        width: 86.17,
                        height: 72.94,
                        left: 26.04,
                        top: 2.45,
                        position: "absolute",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 84.37,
                          height: 70.87,
                          left: 0.75,
                          top: 0.66,
                          position: "absolute",
                          background:
                            "linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%)",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 86.17,
                          height: 72.94,
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                    </div>
                    <div
                      className="Vector"
                      style={{
                        width: 5.02,
                        height: 5.02,
                        left: 45.86,
                        top: 32.25,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 4.39,
                        height: 4.39,
                        left: 94.54,
                        top: 29.89,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Head"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 30.9,
                    paddingBottom: 24.54,
                    paddingLeft: 47.48,
                    paddingRight: 43.71,
                    left: 0,
                    top: 0.13,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Group"
                    style={{
                      width: 68.81,
                      height: 104.56,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Neck15"
                      style={{
                        width: 40.53,
                        height: 47.27,
                        left: 8.49,
                        top: 57.29,
                        position: "absolute",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 39.56,
                          height: 46.38,
                          left: 0.35,
                          top: -0,
                          position: "absolute",
                          background: "white",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 4.81,
                          height: 23.9,
                          left: 0,
                          top: 0.38,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 5.89,
                          height: 15.92,
                          left: 33.44,
                          top: 18.27,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 26.09,
                          height: 17.83,
                          left: 12.69,
                          top: 14.35,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 39.49,
                          height: 21.71,
                          left: 1.04,
                          top: 25.56,
                          position: "absolute",
                          background: "black",
                        }}
                      ></div>
                    </div>
                    <div
                      className="Vector"
                      style={{
                        width: 66.82,
                        height: 81.18,
                        left: 1.02,
                        top: 0.69,
                        position: "absolute",
                        background: "white",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 68.81,
                        height: 82.85,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 14.36,
                        height: 21.1,
                        left: 2.73,
                        top: 38.25,
                        position: "absolute",
                        background: "white",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 6.99,
                        height: 9.54,
                        left: 6.79,
                        top: 43.02,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 6.98,
                        height: 18.19,
                        left: 52.51,
                        top: 39.49,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 15.66,
                        height: 22.48,
                        left: 1.75,
                        top: 37.19,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Mouth"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 89.83,
                    paddingBottom: 64.76,
                    paddingLeft: 87.17,
                    paddingRight: 61.29,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Vector"
                    style={{ width: 11.54, height: 5.42, background: "black" }}
                  ></div>
                </div>
                <div
                  className="Eyes"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 59.88,
                    paddingBottom: 83.29,
                    paddingLeft: 78.94,
                    paddingRight: 46.92,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Sad2"
                    style={{
                      width: 34.15,
                      height: 16.83,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 13.5,
                        height: 5.53,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 9.04,
                        height: 5.57,
                        left: 25.11,
                        top: 1.41,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 4.51,
                        height: 5.92,
                        left: 1.99,
                        top: 10.12,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 4.24,
                        height: 5.55,
                        left: 24.12,
                        top: 11.28,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 8.74,
                        height: 3.67,
                        left: 0.8,
                        top: 9.65,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 6.29,
                        height: 3.26,
                        left: 23.75,
                        top: 10.99,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Hair"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 30.11,
                    paddingBottom: 67.1,
                    paddingLeft: 35,
                    paddingRight: 36.1,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Style321"
                    style={{ width: 88.9, height: 62.79, background: "black" }}
                  ></div>
                </div>
                <div
                  className="Accesories"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 65.25,
                    paddingBottom: 74.61,
                    paddingLeft: 61.21,
                    paddingRight: 41.99,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="StylishGlasses1"
                    style={{
                      width: 56.81,
                      height: 20.14,
                      position: "relative",
                    }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 16.73,
                        height: 6.75,
                        left: 13.41,
                        top: 13.39,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 5.39,
                        height: 2.79,
                        left: 45.93,
                        top: 16.53,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 24.12,
                        height: 19.46,
                        left: 11.99,
                        top: -0,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 15.29,
                        height: 17.04,
                        left: 41.52,
                        top: 1.24,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 13.43,
                        height: 2.68,
                        left: 0,
                        top: 5.28,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 8.35,
                        height: 2.64,
                        left: 34.64,
                        top: 4.7,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="Bg"
                  style={{
                    width: 160,
                    height: 160,
                    paddingTop: 0.01,
                    paddingBottom: 0.09,
                    paddingLeft: 0.04,
                    paddingRight: 0.15,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Vector"
                    style={{ width: 159.8, height: 159.9, background: "white" }}
                  ></div>
                </div>
              </div>
              <div
                className="Text"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  className="Headline"
                  style={{
                    height: 56,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    className="Contact"
                    style={{
                      color: "#7DFFAF",
                      fontSize: 16,
                      fontFamily: "Kalam",
                      fontWeight: "400",
                      lineHeight: 16,
                      wordWrap: "break-word",
                    }}
                  >
                    Contact
                  </div>
                  <div
                    className="EnjoyedMyWorkLetSWorkTogether"
                    style={{
                      color: "#F5F6F6",
                      fontSize: 24,
                      fontFamily: "Heebo",
                      fontWeight: "500",
                      lineHeight: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    Enjoyed my work? Let’s work together
                  </div>
                </div>
                <div
                  className="IMAlwaysUpForAChatPopMeAnEmailAtHiLinaleviComOrGiveMeAShoutOnSocialMedia"
                  style={{ width: 592 }}
                >
                  <span
                    style={{
                      color: "#CDD0D4",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    I’m always up for a chat. Pop me an email at{" "}
                  </span>
                  <span
                    style={{
                      color: "#7DFFAF",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      textDecoration: "underline",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    hi@linalevi.com
                  </span>
                  <span
                    style={{
                      color: "#CDD0D4",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    {" "}
                    or give me a shout on social media.{" "}
                  </span>
                </div>
                <div
                  className="TechStack"
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Iconbutton"
                    style={{
                      padding: 12,
                      background: "#413A4F",
                      borderRadius: 8,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      className="LogoGithub1"
                      style={{
                        width: 24,
                        height: 24,
                        padding: 1.5,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{ width: 21, height: 21, background: "#F5F6F6" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="Iconbutton"
                    style={{
                      padding: 12,
                      background: "#413A4F",
                      borderRadius: 8,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      className="LogoLinkedin1"
                      style={{
                        width: 24,
                        height: 24,
                        padding: 1.5,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        className="Vector"
                        style={{ width: 21, height: 21, background: "#F5F6F6" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="Iconbutton"
                    style={{
                      padding: 12,
                      background: "#413A4F",
                      borderRadius: 8,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      className="LogoInstagram1"
                      style={{ width: 24, height: 24, position: "relative" }}
                    >
                      <div
                        className="Vector"
                        style={{
                          width: 21,
                          height: 21,
                          left: 1.5,
                          top: 1.5,
                          position: "absolute",
                          background: "#F5F6F6",
                        }}
                      ></div>
                      <div
                        className="Vector"
                        style={{
                          width: 12.25,
                          height: 12.25,
                          left: 6.75,
                          top: 5,
                          position: "absolute",
                          background: "#F5F6F6",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="Form"
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32,
                display: "inline-flex",
              }}
            >
              <div
                className="Inputs"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  className="Frame1041"
                  style={{
                    width: 488,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "#171023",
                    borderRadius: 8,
                    border: "1.50px #7DFFAF solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Name"
                    style={{
                      flex: "1 1 0",
                      color: "#CDD0D4",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Name
                  </div>
                </div>
                <div
                  className="Frame1042"
                  style={{
                    width: 488,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "#171023",
                    borderRadius: 8,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="EMail"
                    style={{
                      flex: "1 1 0",
                      color: "#CDD0D4",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    E-mail
                  </div>
                </div>
                <div
                  className="Frame1043"
                  style={{
                    width: 488,
                    height: 160,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    background: "#171023",
                    borderRadius: 8,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="YourMessage"
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      color: "#CDD0D4",
                      fontSize: 16,
                      fontFamily: "Heebo",
                      fontWeight: "400",
                      lineHeight: 24,
                      wordWrap: "break-word",
                    }}
                  >
                    Your message
                  </div>
                </div>
              </div>
              <div
                className="Button"
                style={{
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 16,
                  paddingBottom: 16,
                  background: "#8A42DB",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Label"
                  style={{
                    flex: "1 1 0",
                    textAlign: "center",
                    color: "#F5F6F6",
                    fontSize: 16,
                    fontFamily: "Heebo",
                    fontWeight: "500",
                    lineHeight: 24,
                    wordWrap: "break-word",
                  }}
                >
                  Send me a message
                </div>
                <div
                  className="Arrowright"
                  style={{
                    width: 24,
                    height: 24,
                    paddingLeft: 3,
                    paddingRight: 3,
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    className="Vector"
                    style={{ width: 18, height: 15, background: "#F5F6F6" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Footer"
          style={{
            width: 1440,
            paddingLeft: 112,
            paddingRight: 112,
            paddingTop: 32,
            paddingBottom: 32,
            background: "#171023",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            className="LinaLevi2023LayoutBasedOnRocketseatSTemplate"
            style={{ flex: "1 1 0" }}
          >
            <span
              style={{
                color: "#CDD0D4",
                fontSize: 14,
                fontFamily: "Heebo",
                fontWeight: "400",
                lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Lina Levi 2023. Layout based on{" "}
            </span>
            <span
              style={{
                color: "#CDD0D4",
                fontSize: 14,
                fontFamily: "Heebo",
                fontWeight: "400",
                textDecoration: "underline",
                lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              Rocketseat
            </span>
            <span
              style={{
                color: "#CDD0D4",
                fontSize: 14,
                fontFamily: "Heebo",
                fontWeight: "400",
                lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              ’s template.
            </span>
          </div>
          <div
            className="Frame1030"
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 24,
              display: "flex",
            }}
          >
            <div
              className="MenuItem"
              style={{
                padding: 8,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "#CDD0D4",
                  fontSize: 16,
                  fontFamily: "Heebo",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                GitHub
              </div>
            </div>
            <div
              className="MenuItem"
              style={{
                padding: 8,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "#CDD0D4",
                  fontSize: 16,
                  fontFamily: "Heebo",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                LinkedIn
              </div>
            </div>
            <div
              className="MenuItem"
              style={{
                padding: 8,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "#CDD0D4",
                  fontSize: 16,
                  fontFamily: "Heebo",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                Instagram
              </div>
            </div>
            <div
              className="Iconbutton"
              style={{
                padding: 12,
                background: "#171023",
                borderRadius: 8,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                className="Arrowup"
                style={{
                  width: 24,
                  height: 24,
                  paddingLeft: 4.5,
                  paddingRight: 4.5,
                  paddingTop: 3,
                  paddingBottom: 3,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  className="Vector"
                  style={{ width: 15, height: 18, background: "#F5F6F6" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
