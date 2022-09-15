import Link from "next/link";
import React from "react";

export default function Navbar()
{
	return (
		<div style={{ maxWidth: "100%" }} className="mx-auto">
			<div className="d-flex justify-content-center box gap-5 fs-4">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/exp">
					<a>Experience</a>
				</Link>
				<Link href="/contact">
					<a>Contact</a>
				</Link>
				<Link href="/lab-07">
					<a>Lab-07</a>
				</Link>
			</div>
			<hr />
		</div>
	);
}
