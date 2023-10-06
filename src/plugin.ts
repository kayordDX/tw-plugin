import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import { ConfigOptions } from "./types";

const coreConfig = {
	theme: {
		extend: {
      borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: [...fontFamily.sans],
			},
		}
	}
};

const kayordPlugin = plugin.withOptions<ConfigOptions>(
	() => {
		return ({ addBase, theme }) => {
			addBase({
				h1: { fontSize: theme("fontSize.2xl") },
				h2: { fontSize: theme("fontSize.xl") },
				h3: { fontSize: theme("fontSize.lg") },
			});
		}
	},
	() => {
		return { ...coreConfig };
	}
);

export { kayordPlugin }