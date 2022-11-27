import Image from "next/image";
import btcImage from "../public/images/btc.png";
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";

const HeaderContainer = tw.div`
  header 
  flex flex-col justify-between items-center 
  some:bg-black p-5 shadow-lg2 
  sm:flex-row `;

const HeaderLogo = tw.div`
logo 
flex justify-center 
sm:justify-start`;

const UpArrow = tw.div`up-green`;

const DownArrow = tw.div`down-red`;

const CurrentRate = tw.div`top flex  items-center`;

const RateChange = tw.div`underLast flex justify-between`;

export default function Header() {
  const socketData = useSelector((state) => state.socketDataSlice);

  return (
    <HeaderContainer>
      <section className="header-left">
        <HeaderLogo>
          <Image src={btcImage} alt="btc" width={30} />
          <h2 className="text-3xl ml-2 font-bold">Bitcoin</h2>
        </HeaderLogo>

        <span className=" text-gray-400">As of: {socketData?.date}</span>
      </section>

      <section className="header-right">
        <CurrentRate>
          {socketData.isPositive ? <UpArrow /> : <DownArrow />}
          <h2 className="text-4xl font-bold ml-3">
            {socketData?.value?.last
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
        </CurrentRate>

        <RateChange>
          <h2
            className={` text-xl ${
              socketData.isPositive ? "text-green-500 ml-1" : "text-red-500 "
            }`}
          >
            {socketData?.value?.change?.toFixed(2)}
          </h2>
          <h2
            className={` text-xl ${
              socketData.isPositive
                ? "text-green-500 ml-1"
                : "text-red-500 ml-10"
            }`}
          >
            ({socketData?.value?.percentChange?.toFixed(2)}%)
          </h2>
        </RateChange>
      </section>
    </HeaderContainer>
  );
}
