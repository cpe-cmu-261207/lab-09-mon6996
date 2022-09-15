import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';

export default function contact()
{
	return (
		<div>
			<Navbar />
			<div className="box mx-auto mt-5 p-2 rounded-3 h4" style={{ maxWidth: "80%" }}>
				<div className="ms-3 my-2">
					<p>Name : Thanaporn Chanchanayothin</p>
					<p>Nickname : Mon</p>
					<p>
						Address : 7 Days Asleep, 7/5 Mu 8, Suthep, Mueang Chiang Mai District,
						Chiang Mai 50200
					</p>
					<p>
						Facebook :
						<a
							href="https://www.facebook.com/mon.chanchanayothin/"
							target="_blank"
							rel="noreferrerr"
						>
							Thanaporn Chanchanayothin
						</a>
					</p>
					<p>
						Email :
						<Link href={"mailto:thanaporn_chan@cmu.ac.th"}>
							<a>
								thanaporn_chan@cmu.ac.th
							</a>
						</Link>
					</p>
					<p>Tel : 06-5542-9897</p>
				</div>
			</div>
		</div>
	);
}