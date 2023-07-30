export const h2 = {
  fontSize: { lg: "72px", xs: "35px", md: "45px" },
  letterSpacing: "normal",
  fontWeight:700,
};

export const h2PrimaryHollow = {
  ...h2,
  WebkitTextStroke: " 1px #000",
  WebkitTextFillColor: "#000",
  display: "inline",
};

export const h2Primary = {
  ...h2,
  color: "#00051a",
};

export const caption = {
  // fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: { xs: "13px", lg: "25px", md: "18px" },
  lineHeight: { xs: "20px", lg: "40px", md: "30px" },
  color: "#6C7A89",
};

export const buttonPrimary = {
  minHeight: {lg:'72px',xs:'44px'},
  border: "1px solid #00051a",
  padding: "15px 32px 17px",
  borderRadius: "50px",
  background: "linear-gradient(to left, white 50%, #00051a 50%) right",
  backgroundSize: "200% 100%",
  color: "#00051a",
  "&:hover": {
    backgroundPosition: "left",
    transition: "all 1s ease",
    borderColor: "#00051a",
    color:'#fff'
  },
};

export const buttonSecondary = {
  minHeight: {lg:'32px',xs:'28px'},
  border: "1px solid #00051a",
  padding: "8px 18px 8px",
  borderRadius: "50px",
  background: "linear-gradient(to left, #00051a 50%, #fff 50%) right",
  backgroundSize: "200% 100%",
  color: "#fff",
  backgroundImage: 'linear-gradient(to left, #00051a 50%, #fff 50% ) !important',
  "&:hover": {
    backgroundPosition: "left",
    transition: "all 1s ease",
    borderColor: "#00051a",
    color:'#00051a'
  },
};

export const circle = {
  width: {lg:'72px',xs:'60px'},
  height: {lg:'72px',xs:'60px'},
  borderRadius: "50%",
  border: "1px solid #00051a",
  marginLeft: "10px",
  fontSize:'28px',
  background: "linear-gradient(to left, white 50%, #00051a 50%) right",
  backgroundSize: "200% 100%",
  color:"#00051a",
  "&:hover": {
    backgroundPosition: "left",
    transition: "all 2s ease",
    borderColor: "#00051a",
    color:"#fff"
  },
};

export const circleSecondary = {
  width: {lg:'72px',xs:'60px'},
  height: {lg:'72px',xs:'60px'},
  borderRadius: "50%",
  border: "1px solid #00051a",
  marginLeft: "10px",
  background: "linear-gradient(to left, #00051a 50%, #fff 50%) right",
  backgroundSize: "200% 100%",
  "&:hover": {
    backgroundPosition: "left",
    transition: "all 2s ease",
    borderColor: "#00051a",
    color:'#00051a'
  },
  color:"#fff",
  fontSize:'40px',
  fontWeight:'200'
};



export const hLarge = {
  WebkitTextStroke: "0.1rem #ffc633",
  WebkitTextFillColor: "#fff",
  fontSize: { lg: "300px", sm: "150px", xs: "120px" },
  lineHeight: "normal",
  opacity: 0.4,
  zIndex: -1,
};

export const hLargeVertical = {
  ...hLarge,
  writingMode: { lg: "vertical-rl", sm: "horizontal-tb" },
  fontSize: { lg: "300px", sm: "150px", xs: "70px" },
  lineHeight: 0.8,
  marginBottom:'30px'
};

export const darkHallow = {
  fontWeight: "500",
  // fontFamily: "Poppins",
  WebkitTextStroke: "1px #ffc633",
  WebkitTextFillColor: "#ffc633",
  fontSize: { lg: "60px", xs: "40px" },
};

export const lightHallow = {
  fontWeight: "500",
  // fontFamily: "Poppins",
  WebkitTextStroke: "0.02em white",
  WebkitTextFillColor: "transparent",
  fontSize: { lg: "40px", xs: "40px" },
};

export const circleDark = {
  backgroundColor: "#00051a",
  marginLeft: { lg: "auto", xs: "45px" },
  marginRight: { lg: "auto", xs: "35px" },
  height: { lg: "195px", xs: "76px" },
  width: { lg: "195px", xs: "76px" },
  borderRadius: "50%",
  border: "1px solid #00051a",
};

export const circleBlack = {
  width: "71px",
  height: "71px",
  borderRadius: "50%",
  border: "1px solid #fff",
  marginLeft: "10px",
  background: "linear-gradient(to left, black 50%, #00051a 50%) right",
  backgroundSize: "200% 100%",
  "&:hover": {
    backgroundPosition: "left",
    transition: "all 2s ease",
    borderColor: "#fff",
  },
};

let buttonBlack = { ...buttonPrimary };
buttonBlack.background =
  "linear-gradient(to left, black 50%, #00051a 50%) right";
buttonBlack.color = "#fff";
buttonBlack.border = "1px solid #fff";
buttonBlack["&:hover"] = {
  backgroundPosition: "left",
  transition: "all 2s ease",
  borderColor: "#fff",
};
export const buttonPrimaryBlack = buttonBlack;
