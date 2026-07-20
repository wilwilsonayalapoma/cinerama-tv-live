class LivePlayer extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `

<section class="live-section">

    <div class="container">

        <div class="live-header">

            <span class="live-badge">
                <span class="live-dot"></span>
                EN VIVO
            </span>

            <h2>CineramaTV Live</h2>

        </div>

        <div class="player-container">

            <video
                id="liveVideo"
                controls
                autoplay
                muted
                playsinline
                preload="auto">
            </video>

        </div>

        <div class="live-info">

            <span>
                <i class="fa-solid fa-users"></i>
                <span id="viewerCount">0</span> espectadores
            </span>

            <span id="streamStatus">
                <i class="fa-solid fa-signal"></i>
                Conectando...
            </span>

        </div>

    </div>

</section>

`;

        this.initPlayer();

    }

    initPlayer() {

        const video = document.getElementById("liveVideo");

        const stream = "http://tv.cineramatvbo.com/hls/stream.m3u8";

        if (Hls.isSupported()) {

            const hls = new Hls({

                enableWorker: true,

                lowLatencyMode: true

            });

            hls.loadSource(stream);

            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {

                document.getElementById("streamStatus").innerHTML =
                    '<i class="fa-solid fa-circle-check"></i> En vivo';

                video.play().catch(() => {});

            });

            hls.on(Hls.Events.ERROR, (event, data) => {

                console.error(data);

                document.getElementById("streamStatus").innerHTML =
                    '<i class="fa-solid fa-triangle-exclamation"></i> Sin transmisión';

            });

        }

        else if (video.canPlayType('application/vnd.apple.mpegurl')) {

            video.src = stream;

            video.play();

        }

    }

}

customElements.define("live-player", LivePlayer);