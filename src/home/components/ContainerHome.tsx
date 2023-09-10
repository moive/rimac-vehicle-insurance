export const ContainerHome = () => {
	return (
		<main className="main-container">
			<section className="home-left">
				<figure className="big-image-left">
					<img src="/src/assets/main-desktop-home.svg" />
				</figure>
				<div className="group-text-home">
					<div className="group-text-home-new">¡NUEVO!</div>
					<div className="text-large">
						Seguro{" "}
						<span className="text-red">Vehicular Tracking</span>
					</div>
					<div className="group-text-home-info">
						Cuentanos donde le haras seguimiento a tu seguro
					</div>
				</div>
			</section>
			<section className="home-right">
				<h2>Déjanos tus datos</h2>
				<form>
					<div className="row-form">
						<select name="document">
							<option value="dni">DNI</option>
						</select>
						<input type="text" placeholder="Nro. de doc" />
					</div>
					<div className="row-form">
						<input type="text" placeholder="Celular" />
					</div>
					<div className="row-form">
						<input type="text" placeholder="Placa" />
					</div>
					<div className="row-form">
						<input type="checkbox" />
					</div>
					<div>
						<button>COTÍZALO</button>
					</div>
				</form>
			</section>
		</main>
	);
};
