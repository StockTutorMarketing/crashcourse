import { Flex } from 'antd';
import React from 'react';

const refund = () => {
    return (
        <div style={{ padding: "5%" }}>
          <div style={{ display: "Flex", flexDirection: "column", alignItems: "center" }}>
              <h1 style={{ fontSize: "32px", fontWeight: "500", padding: "40px 0px 40px 0px" }}>Cancellation & Refund Policy</h1>
          </div>
          <p style={{ paddingBottom: "32px" }}>
            VARAH EDUCOM PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              <ul style={{ marginTop: "20px" }}>
                  <li style={{ listStyle: "none", paddingBottom: "8px"}}>(i) Cancellations will be considered only if the request is made immediately within one hours of placeing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
                  <li style={{ listStyle: "none", paddingBottom: "8px"}}>(ii) VARAH EDUCOM PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
                  <li style={{ listStyle: "none", paddingBottom: "8px"}}>(iii) In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.</li>
                  <li style={{ listStyle: "none", paddingBottom: "8px"}}>(iv) In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
                  <li style={{ listStyle: "none", paddingBottom: "8px"}}>(v) In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
                  <li style={{ listStyle: "none", paddingBottom: "8px"}}>(vi) In case of any Refunds approved by the VARAH EDUCOM PRIVATE LIMITED, it’ll take 3-5 days for the refund to be processed to the end customer.</li>
              </ul>
          </p>
        </div>
    );
};

export default refund;
