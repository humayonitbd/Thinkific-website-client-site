import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import LearningProducts from '../LearningProducts/LearningProducts';
import MarketSellExpertice from '../MarketSellExpertice/MarketSellExpertice';
import ScaleBusiness from '../ScaleBusiness/ScaleBusiness';
import SuccessStory from '../SuccessStory/SuccessStory';
import SuccessSupport from '../SuccessSupport/SuccessSupport';
import ThinkificFree from '../ThinkificFree/ThinkificFree';

const Home = () => {
    return (
        <div>
            <HomeBanner />
        <LearningProducts />
        <MarketSellExpertice />
        <SuccessSupport />
        <ScaleBusiness />
        <SuccessStory />
        <ThinkificFree />
        </div>
    );
};

export default Home;