export const HomeLeft = () => {
	return (
		<section className="home-left">
			<figure className="big-image-left">
				<img src="/assets/main-desktop-home.svg" />
			</figure>
			<div className="group-text-home">
				<div className="group-text-home-new">¡NUEVO!</div>
				<div className="text-large">
					Seguro <span className="text-change">Vehicular </span>{" "}
					<span className="text-red">Tracking</span>
				</div>
				<div className="group-text-home-info">
					Cuentanos donde le haras seguimiento a tu seguro
				</div>
			</div>
			<figure className="big-image-left-mobile">
				<img src="/assets/main-mobile-home.svg" />
			</figure>
		</section>
	);
};
