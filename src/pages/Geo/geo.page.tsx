/** @format */

import { Button, Input, InputNumber, Space } from "antd";
import React, { useState } from "react";
import { DetailGeo } from "../../services/Geo/Geo";
import { useNavigate } from "react-router-dom";

// QttdyDPYrTEYydlATeZyb0LeSaHkVdLjDrs82qUBvWl7kXjipkzucUPaOJDzLt0I

const GeoPage: React.FC = () => {
  const navigate = useNavigate();
  const [longitude, setLongitude] = useState<any>();
  const [latitude, setLatitude] = useState<any>();

  const nextPage = async () => {
    navigate(`/geo/${longitude}/${latitude}`);
  };

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>
        Olá! para começarmos, insira os dados!
      </h1>
      <div style={{ textAlign: "center" }}>
        <Space>
          <Input
            style={{
              width: 200,
              margin: "auto",
              textAlign: "center",
              marginBottom: 30,
            }}
            onChange={(e : any) => setLongitude(e.target.value)}

            placeholder='Longitude'
          />
             <Input
            style={{
              width: 200,
              margin: "auto",
              textAlign: "center",
              marginBottom: 30,
            }}
            onChange={(e : any) => setLatitude(e.target.value)}
            placeholder='Latitude'
          />
        </Space>
        <br />
        <Button type='primary' onClick={() => nextPage()}>
          Começar
        </Button>
      </div>
    </React.Fragment>
  );
};

export default GeoPage;
