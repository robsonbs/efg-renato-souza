export default function NavBar() {
  return (
    <div
      className="Navbar"
      style={{
        width: 1440,
        height: 80,
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 16,
        paddingBottom: 16,
        background: "#171023",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        alignItems: "center",
        gap: 770,
        display: "inline-flex",
      }}
    >
      <div
        className="Logo"
        style={{
          width: 85,
          height: 32,
          paddingTop: 7.02,
          paddingBottom: 7.02,
          paddingLeft: 1.49,
          paddingRight: 0.54,
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          className="Linalevi"
          style={{ width: 82.97, height: 17.95, background: "#F5F6F6" }}
        ></div>
      </div>
      <div
        className="MenuItems"
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 16,
          display: "inline-flex",
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
              color: "#F5F6F6",
              fontSize: 16,
              fontFamily: "Heebo",
              fontWeight: "700",
              lineHeight: 24,
              wordWrap: "break-word",
            }}
          >
            Home
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
            About
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
            Projets
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
            Contact
          </div>
        </div>
        <div
          className="Actions"
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            className="IconButton"
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
              className="Pt"
              style={{
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                className="Pt"
                style={{
                  width: 24,
                  textAlign: "center",
                  color: "#F5F6F6",
                  fontSize: 16,
                  fontFamily: "Heebo",
                  fontWeight: "400",
                  lineHeight: 24,
                  wordWrap: "break-word",
                }}
              >
                PT
              </div>
            </div>
          </div>
          <div
            className="IconButton"
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
              className="Sundim"
              style={{
                width: 24,
                height: 24,
                padding: 2.25,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                className="Vector"
                style={{ width: 19.5, height: 19.5, background: "#F5F6F6" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
