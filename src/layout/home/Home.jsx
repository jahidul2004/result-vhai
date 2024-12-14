import Banner from "../../pages/Banner/Banner";
import CommentSection from "../../pages/commentSection/CommentSection";
import ResultAnalysis from "../../pages/resultAnalysis/ResultAnalysis";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            
            <ResultAnalysis></ResultAnalysis>

            <CommentSection></CommentSection>
        </>
    );
};

export default Home;
