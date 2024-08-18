const TextAnimation = () => {
	const text = "Hello World";

	return (
		<div className="flex min-h-screen justify-center items-center bg-slate-900">
			<div className="relative flex justify-center items-center">
				<div className="relative w-[400px] h-[400px] -mx-10 border-[80px] border-yellow-500 rounded-full"></div>
				<div className="relative w-[400px] h-[400px] -mx-10 border-[80px] border-yellow-500 rounded-full"></div>

				{text.split("").map((char, idx) => {
					return (
						<p
							key={idx}
							style={{ animationDelay: `${idx * 0.3}s` }}
							className="animate-animateText absolute left-1/2 top-1/2 -translate-y-1/2 w-20 h-20  flex justify-center items-center">
							<span
								style={{ animationDelay: `${idx * 0.3}s` }}
								className="animate-animateChars [text-shadow:0_1px_1px_#0f172a] text-slate-100 font-semibold text-xl">
								{char}
							</span>
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default TextAnimation;
