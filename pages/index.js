import { Inter } from "next/font/google";
import Home from "@/src/components";
import { KeyboardProvider } from "@/src/providers/KeyboardProvider";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
	return (
		<>
			<KeyboardProvider>
				<Home />
			</KeyboardProvider>
		</>
	);
}
