import React from 'react';

export default function Introduce()
{
    return (
        <div
            className="box mx-auto mt-5 p-3 rounded-3"
            style={{ maxWidth: "80%" }}
        >
            <div className="text-center mb-3">
                <img
                    src="/profile.jpg"
                    className="rounded-circle"
                    width="150"
                    height="150"
                    style={{ objectfit: "cover" }}
                />
            </div>
            <div className="ms-3 h5">
                <p className="fw-bold h3 mb-3">Thanaporn Chanchanayothin</p>
                <p>Birth Date : Oct 2, 2000</p>
                <p>
                    2016-2018 : Sci-Math, Rajavinit Mathayom School, Bangkok, Thailand
                </p>
                <p>
                    2021-present : Computer Engineering, Chiang Mai University, Chiang
                    Mai, Thailand
                </p>
            </div>
        </div>
    );
}
