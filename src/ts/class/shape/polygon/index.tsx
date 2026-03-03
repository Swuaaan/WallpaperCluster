// ══════════════════════════════════════════════════
// MARK: 0. Setup
// ──────────────────────────────────────────────────
// #═#═#═#═#═# 0.1 Imports #═#═#═#═#═#

import "./style.scss";

// #═#═#═#═#═# 0.2 Types #═#═#═#═#═#


// ══════════════════════════════════════════════════
// MARK: 1. Polygon
// ──────────────────────────────────────────────────

export namespace Polygon {
  export interface Props {
    cornerCount             ?:number,
	size                     :number,
	scalingFactor           ?:number,
	color                   ?:string,
	rotation                ?:number,
	centerX                 ?:number,
	centerY                 ?:number,
	transparency            ?:number,
    // children                ?:JSX.Element;
  }
}

export function Polygon(
  props: Polygon.Props
) {
    const 	size = props.size ?? 100,
            color = props.color ?? "#00ff00",
            centerX = props.centerX ?? size / 2,
            centerY = props.centerY ?? size / 2,
            transparency = props.transparency ?? 1,
    	 	cornerCount = props.cornerCount ?? 3,
			scalingFactor = props.scalingFactor ?? 1,
			rotation = props.rotation ?? 0,
			radius = (size / 2) * scalingFactor;
	
	const 	points:string[] = [];

	if (cornerCount >= 3) {
		const   n = Math.max(3, Math.floor(cornerCount)),
				angleOffset = (rotation * Math.PI) / 180 - Math.PI / 2;

		for (let i = 0; i < n; i++) {
			const 	angle = angleOffset + (i * 2 * Math.PI) / n,
					x = centerX + radius * Math.cos(angle),
					y = centerY + radius * Math.sin(angle);

			points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
			console.log(`Point ${i}: (${x.toFixed(2)}, ${y.toFixed(2)})`);
		}

		//TODO: fix centration of polygon

		return (
			<svg width={size} height={size}>
				<polygon points={points.join(" ")} fill={color} opacity={transparency} />
				<circle cx={centerX} cy={centerY} r={2} fill="#000000" />
			</svg>
		);
	}

 	return (
		<svg width={size} height={size}>
			<circle cx={centerX} cy={centerY} r={radius} fill={color} opacity={transparency}/>
		</svg>
	);
}


