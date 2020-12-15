import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <Fade delay={300}>
            <div className="col-auto">
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="Bank Central Asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </div>
          </Fade>

          <div className="col-6 align-self-start" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
                <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                <InputFile
                  accept="image/*"
                  id="proofPayment"
                  name="proofPayment"
                  value={data.proofPayment}
                  onChange={props.onChange}
                />
                <label htmlFor="bankName">Asal Bank</label>
                <InputText
                  id="bankName"
                  name="bankName"
                  type="text"
                  value={data.bankName}
                  onChange={props.onChange}
                />
                <label htmlFor="bankHolder">Nama Pengirim</label>
                <InputText
                  id="bankHolder"
                  name="bankHolder"
                  type="text"
                  value={data.bankHolder}
                  onChange={props.onChange}
                />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
