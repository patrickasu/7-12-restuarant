import React from 'react';
import { Link } from 'react-router-dom';

const Delicacies = () => (
	<div className="main-content">
		<div className="delicacies-section">
			<div className="delicacies-middle">
				<p>Native Delicacies</p>
				<h1>OUR SERVICES</h1>
				<Link to="/foodtable"><div className="my-delicacies-section">
					<div className="delicacies-section-col">
						<div className="delicacies-image-1">
							<div className="delicacies-overlay">
								<div className="delicacies-overlay-border">
									BREAKFAST
								</div>
							</div>
						</div>

					</div>
					<div className="delicacies-section-col">
						<div className="delicacies-image-2">
							<div className="delicacies-overlay">
								<div className="delicacies-overlay-border">
									LUNCH
								</div>
							</div>
						</div>

					</div>
					<div className="delicacies-section-col">
						<div className="delicacies-image-3">
							<div className="delicacies-overlay">
								<div className="delicacies-overlay-border">
									DINNER
								</div>
							</div>
						</div>

					</div>
				</div></Link>
			</div>
		</div>
	</div>
);

export default Delicacies;