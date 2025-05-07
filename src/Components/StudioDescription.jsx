import React from 'react';



const StudioDescription = () => {
  return (
    <div className="relative" style={{ width: "1150px", height: "180px", margin: "0 auto" }}>
    
      
      {/* Text content with specific typography */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h2
          style={{
            fontFamily: "'Rethink Sans', sans-serif",
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#666666",
            textAlign: "center",
          }}
        >
          We are a full-service studio creating transformative{" "}
          <span style={{ color: "#FFFFFF", fontWeight: 600 }}>digital experiences and solutions.</span>{" "}
          <span style={{ color: "#666666" }}>specializing in</span>{" "}
          <span style={{ color: "#FFFFFF", fontWeight: 600 }}>websites and web applications.</span>
        </h2>
      </div>
    </div>
  );
};

export default StudioDescription;