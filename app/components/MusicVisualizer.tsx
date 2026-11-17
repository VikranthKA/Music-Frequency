"use client";

import { useRef } from "react";

export default function MusicVisualizer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <main className="min-h-screen bg-[#080611] text-white overflow-hidden">
            {/* background lighting */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(100,30,180,0.20),transparent_60%)]" />
            <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
                <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl"> ♪</div>
                 <h1 className="font-bold text-xl tracking-[0.18em]">
                    MUSIC <span className="text-puprle-400">WELFARE</span>
                </h1>

                </div>

                <div className="hidden md:block text-xs tracking-[0.3em] text-purple-300/60">
                SOUND EXPERIENCE</div>
            </header>

            {/* main content */}
            <section className="relative z-10 max-w-6xl mx-auto px-5 py-8 md:py-12">
                <div className="text-center mb-5">
                    <p className="text-purple-400 text-xs tracking-[0.4em] mb-3">LIVE AUDIO VISUALIZATION</p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Feel Every
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500">
                            Frequency
                            Beat
                        </span>
                    </h2>

                </div>

                {/* visualizer */}

                <div className="reative mx-auto w-full max-w-[650px] aspect-square">
                    <canvas ref={canvasRef}
                     className="w-full h-full">

                    </canvas>
                </div>
            </section>
        </main>
    )

}

