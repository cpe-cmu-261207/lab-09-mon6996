import React from 'react';
import Navbar from '../components/Navbar';

export default function exp()
{
	return (
		<div>
			<Navbar />
			{/* 1 */}
			<div className="box card mx-auto mt-5 mb-3" style={{ maxWidth: "80%" }}>
				<div className="d-flex">
					<img
						src="/proj_scr.png"
						className="my-auto ms-3 rounded-2"
						width="150"
						height="150"
					/>
					<div className="card-body my-auto">
						<h5 className="card-title fw-bold h4">The Truth</h5>
						<p className="card-text h5">
							This project game made by my group for 261103. This project use
							scratch. This game type is story horror and puzzle game.
						</p>
					</div>
				</div>
			</div>
			{/* 2 */}
			<div className="box card mx-auto mb-3" style={{ maxWidth: "80%" }}>
				<div className="d-flex">
					<div className="card-body my-auto text-end">
						<h5 className="card-title fw-bold h4">Mystery World</h5>
						<p className="card-text h5">
							This projct game made by my group for 261102. This project use C++,
							visual studio 2022 and sfml. This game type is 2d platformer and
							puzzle game.
						</p>
					</div>
					<img
						src="/proj_c++.png"
						className="my-auto me-3 rounded-2"
						width="150"
						height="150"
					/>
				</div>
			</div>
		</div>
	);
}
