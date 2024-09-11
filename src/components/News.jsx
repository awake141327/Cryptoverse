import { Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";
import Loader from "./Loader";

const { Text, Title } = Typography;

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  console.log(cryptoNews?.data);

  if (!cryptoNews?.data) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.data.map((news, i) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="norefer">
              <div className="news-image-container">
                <Title level={4} className="news-title">
                  {news.title > 100
                    ? `${news?.title.substring(0, 100)}...`
                    : news.title}
                </Title>
                <img
                  src={news?.thumbnail || demoImage}
                  alt="news"
                  width="100%"
                  height="150px"
                />
                <div className="provider-container">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Avatar
                      src={news?.thumbnail || demoImage}
                      alt="news-provider"
                    />
                    <Text>CryptoDaily</Text>
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
