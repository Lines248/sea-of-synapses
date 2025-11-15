Sea of Synapses

An interactive map of cognitive states
by InLine Access Studio

Live Link: https://sea-of-synapses-n1r7tym6r-lines-projects-a21b5825.vercel.app/

Data Visualization prototype

Design Philosophy
	• Neural Aesthetic: A background SVG of flowing neural pathways sets the spatial context.
	• Glass-tile grid: Semi-transparent cells overlay the neural backdrop, conveying depth and translucence — encouraging exploration rather than static viewing.
	• Synaptic nodes & connections: Each node represents a cognitive state (e.g., Focus Loop, Resting Mesh, Signal Boost). Nodes connect based on shared categories, reflecting how brain-networks interact.
	• Interactive layering: Hovering or selecting a node reveals details. The header icon syncs with the selection, reinforcing the brain-motif visually.
	• Fluid motion: Subtle animations (tile tilt, gradient drift, glowing connections) bring the interface to life without overwhelming — maintaining a professional, scientific tone.

Technical Stack
	•	React + TypeScript: Functional components with typed props for clarity and maintainability.
	•	Vite: Ultra-fast build tool for rapid iteration and modern module support.
	•	Tailwind CSS: Utility-first styling
	•	SVG & CSS animations: The neural map and brain icon are SVG-driven; animations leverage CSS keyframes for performance and smoothness.
	•	Data-driven architecture:
	•	    nodes.json defines each cognitive state (id, label, description, intensity, category, x/y position)
	•   	useNodeData.ts exposes the node list and lookup functions
	•	    Category ⇒ brain-region mapping drives visual sync between logic and design
	•   Accessibility & performance: Focus management, ARIA labels, motion-reduction respect, and efficient layering to maintain fast load times and inclusive UX.

Why This Matters
	• Portfolio strength: Demonstrates the ability to build a polished, interactive UI that sits at the intersection of design, data visualization, and front-end engineering.
	• Scalability ready: Data-driven nodes mean new states, relationships or full modules can be added with minimal refactor.
	• Design system potential: The visual language (glass grids, neural geometry, interactive tiles) can extend into broader product ecosystems or brand identity work.
	• Real-world applicability: The concept maps easily to education-tech, productivity dashboards, visualization tools, or even neuro-analytics platforms — offering product relevance beyond experimentation.

What’s Next
	•	Integrate deeper brain-region visualisations (e.g., heatmaps, layer overlays)
	•	Add dynamic filtering (by category, intensity, connection)
	•	Implement “focus mode” views for individual nodes, with full detail panels
	•	Explore mobile-first responsive adjustments and performance tuning
	•	Deploy analytics and user-interaction tracking to inform future UX iterations