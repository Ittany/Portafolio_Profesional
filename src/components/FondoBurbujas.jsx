import '../assets/styles/FondoBurbujas.css';

const FondoBurbujas = () => {
  const burbujas = [
    { size: 80, left: '5%',  delay: '0s',   duration: '18s', opacity: 0.15 },
    { size: 120, left: '15%', delay: '2s',   duration: '22s', opacity: 0.12 },
    { size: 60,  left: '28%', delay: '4s',   duration: '16s', opacity: 0.18 },
    { size: 150, left: '40%', delay: '1s',   duration: '25s', opacity: 0.1 },
    { size: 90,  left: '55%', delay: '3s',   duration: '20s', opacity: 0.14 },
    { size: 70,  left: '68%', delay: '5s',   duration: '17s', opacity: 0.16 },
    { size: 110, left: '78%', delay: '2.5s', duration: '23s', opacity: 0.12 },
    { size: 95,  left: '90%', delay: '0.5s', duration: '19s', opacity: 0.15 },
  ];

  return (
    <div className="fondo-burbujas" aria-hidden="true">
      <div className="fondo-burbujas__gradient" />
      {burbujas.map((b, i) => (
        <span
          key={i}
          className="fondo-burbujas__bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: b.left,
            animationDelay: b.delay,
            animationDuration: b.duration,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FondoBurbujas;