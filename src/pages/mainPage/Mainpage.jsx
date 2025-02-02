import { useState, useRef, useEffect } from "react";
import maintext from "../../image/maintext.png";
import bird from "../../image/bird.png";
import flag from "../../image/flag.png";
import LocalPicks from "../recordPage/LocalPicks";
import {
  MainContainer,
  TextImage,
  Contents,
  TravelContainer,
  TravelTitle,
  Local,
  LocalTitle,
  MobileLandingBox,
  WebRender,
} from "./MainpageStyle";
import Buddy from "./Buddy";
import OneAndVoteAll from "./OneAndVote";
import axiosInstance from "../../../src/api/axios";

// const data = [
//   { id: 1, nickname: "User1" },
//   { id: 2, nickname: "User2" },
// ];

const Mainpage = ({}) => {
  // 버디리스트 담기
  const [buddyResults, setBuddyResults] = useState([]);
  // 버디리스트 불러오기
  const buddyDataArray = async () => {
    try {
      const response = await axiosInstance.get("/api/companions/");
      setBuddyResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 로컬픽 담기
  const [localPicks, setLocalPicks] = useState([]);
  // 로컬픽 불러오기
  useEffect(() => {
    axiosInstance
      .get("/api/card/")
      .then((response) => {
        let result = response.data;
        setLocalPicks(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    buddyDataArray();

    if (!ref.current) return;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "290px", threshold: 0 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 모바일화면 구현
  const isMobile = window.innerWidth <= 460;

  return (
    <MainContainer>
      {isMobile ? (
        // Render MobileLandingBox for mobile screens
        <>
          <MobileLandingBox />

          <p>http://likelionwww.com</p>
        </>
      ) : (
        // Render the normal content for other screen sizes
        <WebRender>
          <TextImage className={isInViewport ? "frame-in" : ""} ref={ref}>
            <img src={maintext} alt="maintext" />
          </TextImage>
          <Contents>
            <OneAndVoteAll />

        <TravelContainer>
          <TravelTitle>
            <img src={bird} alt="bird" />
            <p>Finding Travel buddy</p>
          </TravelTitle>
          {buddyResults
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 4)
            .map((item, index) => (
              <Buddy
                key={item.id}
                data={item}
                isEven={index === 1 || index === 3}
              />
            ))}
        </TravelContainer>
        <Local>
          <LocalTitle>
            <img src={flag} alt="flag" />
            <p>The secret of locals!</p>
          </LocalTitle>
          <span>
            {localPicks
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .map((result) => (
                <LocalPicks key={result.id} data={result} />
              ))}
          </span>
        </Local>
      </Contents>
      </WebRender>
      )}
    </MainContainer>
  );
};

export default Mainpage;
