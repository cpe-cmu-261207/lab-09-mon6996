import React from 'react';

export default function Hobby() {
    return (
        <div>
            <p className="mx-auto mt-5 p-3 fw-bold h3 text-center text-black">Hobbies</p>
            {/* 1 */}
            <div className="box card mx-auto mb-3" style={{ maxWidth: "80%" }}>
                <div className="d-flex">
                    <img
                        src="/game.png"
                        className="-fluid rounded-start"
                        width="150"
                        height="150"
                    />
                    <div className="card-body my-auto">
                        <h5 className="card-title fw-bold h4">Game</h5>
                        <p className="card-text h5">
                            I like game, steamer and youtuber. That is happiness for my life.
                        </p>
                    </div>
                </div>
            </div>;
            {/* 2 */}
            <div className="box card mx-auto mb-3" style={{ maxWidth: "80%" }}>
                <div className="d-flex">
                    <div className="card-body my-auto text-end">
                        <h5 className="card-title fw-bold h4">Anime</h5>
                        <p className="card-text h5">
                            I like anime and manga because my brother like to invite me to watch
                            an anime. It is happiness like a game.
                        </p>
                    </div>
                    <img
                        src="/anime.jpg"
                        className="-fluid rounded-end"
                        width="150"
                        height="150"
                    />
                </div>
            </div>
        </div>
    );
}
