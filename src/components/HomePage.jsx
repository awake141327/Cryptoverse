import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { Link } from "react-router-dom";
import { CryptoCurrencies, News } from "./";
import millify from "millify";
import Loader from "./Loader";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crypto Currencies"
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24hr Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/crypto-currencies" className="link-hover">
            Show More
          </Link>
        </Typography.Title>
      </div>
      <CryptoCurrencies simplified={true} />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news" className="link-hover">
            Show More
          </Link>
        </Typography.Title>
      </div>
      <News />
    </>
  );
};

export default HomePage;
