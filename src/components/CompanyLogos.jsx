import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
      Bring your ideas, code your dreams, and make an impact at CodeBizz!
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
           <marquee behavior="" direction=""><img src={logo} width={134} height={28} alt={logo} /></marquee> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
