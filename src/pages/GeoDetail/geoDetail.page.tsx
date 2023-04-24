/** @format */

import { Button, Card, Col, Input, List, Row, Space, Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { DetailGeo } from "../../services/Geo/Geo";
import { useNavigate, useParams } from "react-router-dom";


const GeoDetailPage: React.FC = () => {
  const { longitude, latitude } = useParams();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const geoData = async () => {
      const data = await DetailGeo(longitude, latitude);
      return data;
    };
    geoData().then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  const Component = useCallback(() => {
    if (loading === true) {
      return <Spin  style={{margin: 'auto'}} size='large' />;
    } else {
      return (
        <div>
          <p
            style={{
              color: "#77F031",
              fontWeight: "700",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Informações Geográficas
          </p>
          <Card title={"Longitude"}>{longitude}</Card>
          <Card title={"Latitude"}>{latitude}</Card>
          <Card title={"TimeZone"}>{data.timezone}</Card>
          <Card title={"Periodo"}>
            {data.current_weather.is_day === 1 ? (
              <div>Dia</div>
            ) : (
              <div>Noite</div>
            )}
          </Card>
          <Card title={"Temperatura"}>{data.current_weather.temperature}</Card>
        </div>
      );
    }
  }, [loading]);

  return <Component />;
};

export default GeoDetailPage;
