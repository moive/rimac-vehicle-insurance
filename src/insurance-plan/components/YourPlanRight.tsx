import { ItemCoveragePlan } from "./ItemCoveragePlan";

export const YourPlanRight = () => {
	return (
		<div className="insurance-plan-right">
			<div className="breadcrumb">
				<a href="/">
					<img src="/src/assets/icon-back.svg" alt="icon-back" />{" "}
					<span>VOLVER</span>
				</a>
			</div>
			<div>
				<div className="text-large">
					<span>Hola </span>
					<span className="text-red">Juan!</span>
				</div>
				<p>Conoce las coberturas para tu plan</p>
			</div>
			<div className="content-info-plan">
				<div className="content-info-plan-left">
					<div className="info-car">
						<div className="info-car-number">
							<span>Placa: </span> <span>C2U-114</span>
						</div>
						<div className="info-car-model">
							Wolkswagen 2019 Golf
						</div>
						<figure className="advisor">
							<img src="/src/assets/advisor.svg" alt="advisor" />
						</figure>
					</div>
					<div className="group-total-insurence">
						<div className="group-total-insurence-info">
							<div className="group-total-insurence-description">
								Indica la suma asegurada
							</div>
							<div className="group-total-insurence-min-max">
								<span>MIN $12,500</span>
								<span>|</span>
								<span>MAX $16,500</span>
							</div>
						</div>
						<div className="group-total-insurence-minusplus-total">
							<button>
								<img src="/src/assets/icon-minus.svg" alt="" />
							</button>
							<span>$ 14,300</span>
							<button>
								<img src="/src/assets/icon-plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="custom-plan">
						<div className="custom-plan-title">
							Agrega o quita coberturas
						</div>
						<ul className="navbar-coverage">
							<li className="navbar-coverage-item active">
								<span>Protege a tu auto</span>
							</li>
							<li className="navbar-coverage-item">
								<span>Protege a los que te rodean</span>
							</li>
							<li className="navbar-coverage-item">
								<span>Mejora tu plan</span>
							</li>
						</ul>
						<div className="protect-your-car">
							<ItemCoveragePlan
								title="Llanta robada"
								iconImage="icon-theft"
								description="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
							/>
							<ItemCoveragePlan
								title="Choque y/o pasarte la luz roja"
								iconImage="icon-crash"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aspernatur."
							/>
							<ItemCoveragePlan
								title="Atropello en la vía Evitamiento"
								iconImage="icon-perdidatotal"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit ab in, numquam voluptate beatae inventore eos aliquam dolor esse porro eum corporis eligendi odio cumque ipsa placeat omnis totam."
							/>
						</div>
					</div>
				</div>
				<div className="content-info-plan-right">
					<div className="total-plan">
						<div className="total-plan-title">Monto</div>
						<div className="total-plan-amount">$35.00</div>
						<div className="total-plan-mounth">mensuales</div>
					</div>
					<div className="description-plan-final">
						<p>El precio incluye:</p>
						<ul className="description-plan-final-list">
							<li>
								<img
									src="/src/assets/icon-check.svg"
									alt="icon-check"
								/>{" "}
								Llanta de respuesto
							</li>
							<li>
								<img
									src="/src/assets/icon-check.svg"
									alt="icon-check"
								/>{" "}
								Analisis de motor
							</li>
							<li>
								<img
									src="/src/assets/icon-check.svg"
									alt="icon-check"
								/>{" "}
								Aros gratis
							</li>
						</ul>
						<div className="group-btn">
							<button className="btn middle">Lo quiero</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
