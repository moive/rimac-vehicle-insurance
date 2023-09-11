import { useState } from "react";

type Props = {
	title: string;
	iconImage: string;
	description: string;
};

export const ItemCoveragePlan = ({ title, iconImage, description }: Props) => {
	const [open, setOpen] = useState(false);
	const [add, setAdd] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};
	const addItem = () => {
		setAdd(!add);
	};
	return (
		<div className="item-coverage-plan">
			<div className="item-coverage-plan-top">
				<figure className="item-coverage-plan-icon">
					<img
						src={"/src/assets/" + iconImage + ".svg"}
						alt={iconImage}
					/>
				</figure>
				<div className="item-coverage-plan-middle">
					<div className="item-coverage-plan-title">{title}</div>
					<div className="item-coverage-plan-add-remove">
						<button onClick={() => addItem()}>
							{add ? (
								<>
									<img
										src="/src/assets/icon-circle-minus.svg"
										alt=""
									/>
									<span>quitar</span>
								</>
							) : (
								<>
									<img
										src="/src/assets/icon-circle-plus.svg"
										alt=""
									/>
									<span>agregar</span>
								</>
							)}
						</button>
					</div>
				</div>
				<div className="item-coverage-plan-icon-right">
					<button onClick={() => toggle()}>
						{open ? (
							<img
								src="/src/assets/icon-red-arrow-up.svg"
								alt=""
							/>
						) : (
							<img
								src="/src/assets/icon-red-arrow-down.svg"
								alt=""
							/>
						)}
					</button>
				</div>
			</div>
			{open ? (
				<div className="item-coverage-plan-description">
					{description}
				</div>
			) : (
				""
			)}
		</div>
	);
};
