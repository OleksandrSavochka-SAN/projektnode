import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* --- <Head> odpowiada za meta, tytuł i favicon. --- */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/soccer-ball-icon.png" />
        <title>Portal sportowy</title>
      </Head>

      {/* ---  --- */}
      <div className="scroll-container">
        <header>
          <div className="container">
            <div className="header__content">
              <div className="header__info">
                <img
                  src="/soccer-ball-icon.png"
                  alt="Logo"
                  className="header__logo"
                />
                <h1 className="header__title">Portal sportowy</h1>
              </div>
              <nav className="header__nav">
                <ul>
                  <li>
                    <a href="#">Główna</a>
                  </li>
                  <li>
                    <a href="#">Aktualności</a>
                  </li>
                  <li>
                    <a href="#">Mecze</a>
                  </li>
                  <li>
                    <a href="#">Kontakt</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="content">
              {/* Lewa kolumna */}
              <div className="content__left">
                {/* Mecz Ligi Mistrzów */}
                <article>
                  <div className="article__header">
                    <span className="article__date">
                      Opublikowano: 09 kwietnia 2025, 12:00
                    </span>
                    <h2 className="article__title">
                      Historyczne zwycięstwo Arsenalu nad Realem Madryt 3:0 w
                      Lidze Mistrzów
                    </h2>
                  </div>
                  <section className="article__image">
                    <img
                      src="/img/photo_4.jpeg"
                      alt="Mecz piłkarski"
                      className="image"
                    />
                  </section>
                  <section className="article__text">
                    <p>
                      W dniu 8 kwietnia 2025, podczas emocjonującego meczu Ligi
                      Mistrzów, Arsenal odniósł spektakularne zwycięstwo nad
                      Realem Madryt, wygrywając 3:0. Od pierwszych minut
                      spotkania drużyna Arsenalu prezentowała wysoką
                      intensywność gry i doskonałą koordynację, co skutkowało
                      szybkim przejęciem inicjatywy.
                    </p>
                  </section>
                </article>

                {/* Rzuty karne Rice'a */}
                <article>
                  <div className="article__header">
                    <h2 className="article__title">
                      Rzuty karne Rice'a przyniosły zwycięstwo Arsenalowi
                    </h2>
                  </div>
                  <section className="article__image">
                    <img
                      src="/img/photo_1.avif"
                      alt="Mecz piłkarski"
                      className="image"
                    />
                  </section>
                  <section className="article__text">
                    <p>
                      Gospodarze rozpoczęli bardzo aktywnie, podczas gdy Real
                      Madryt był zmuszony do kontrataków w początkowym okresie.
                      Pierwszy poważny moment nastąpił w 13. minucie, gdy Raul
                      Asensio zablokował strzał Declana Rice'a, a następnie
                      Thibaut Courtois sparował niski strzał Thomasa Parteya.
                    </p>
                    <p>
                      Stopniowo tempo stało się jeszcze wyższe i obaj bramkarze
                      musieli się mocno napracować. W 31 minucie David Raya
                      uratował gospodarzy po tym, jak strzał Kyliana Mbappe
                      został uratowany przez penetrujące podanie Jude'a
                      Bellinghama.
                    </p>
                    <p>
                      Bukayo Saka oddał dwa świetne strzały z prawej flanki, ale
                      żaden z graczy Arsenalu nie zdążył ich obronić, a
                      następnie Courtois dwukrotnie wybronił uderzenie Rice'a w
                      drugiej połowie i dośrodkowanie Gabriela Martinelliego.
                    </p>
                    <p>
                      Obaj bramkarze wykazali się dużymi umiejętnościami, a
                      bramka mogła być tylko wynikiem czegoś wyjątkowego. Rice
                      uderzył z rzutu wolnego w 58 minucie, posyłając piłkę
                      równo z poprzeczką.
                    </p>
                    <p>
                      Po objęciu prowadzenia Arsenal nadal szukał szczęścia w
                      ataku. Piłkarze Realu w krótkim odstępie czasu zablokowali
                      cztery strzały, dwukrotnie wyjmując piłkę z siatki.
                      Jednak w 70 minucie The Gunners wywalczyli kolejny rzut
                      wolny, a Rice uderzył być może jeszcze bardziej
                      spektakularnie.
                    </p>
                    <p>
                      Trybuny skandowały „więcej standardów, ole ole”, ale
                      Arsenal zdobył trzecią bramkę z gry. W 75 minucie Myles
                      Lewis-Skelly oddał strzał z lewej flanki na skraj pola
                      karnego, a Mikel Merino skierował piłkę w prawy róg
                      bramki Courtoisa.
                    </p>
                  </section>
                </article>

                {/* Zawodnik meczu */}
                <article>
                  <div className="article__header">
                    <h2 className="article__title">
                      Zawodnik meczu PlayStation®: Declan Rice (Arsenal)
                    </h2>
                  </div>
                  <section className="article__image">
                    <img
                      src="/img/photo_3.webp"
                      alt="Mecz piłkarski"
                      className="image"
                    />
                  </section>
                  <section className="article__text">
                    <p>
                      "Pomocnik rozegrał świetny mecz. Dwa razy fantastycznie
                      strzelił z rzutów wolnych w momencie, gdy było to
                      najbardziej potrzebne. Jego siła i wytrzymałość pomogły
                      Arsenalowi w drugiej połowie. Rice świetnie poruszał się
                      między liniami i dobrze współpracował z Martinellim na
                      lewej stronie, w pełni zasługując na tę nagrodę!".
                      Obserwatorzy techniczni UEFA.
                    </p>
                  </section>
                </article>

                {/* Opinie kibiców */}
                <section className="reviews">
                  <h2>Opinie kibiców</h2>
                  <div className="review__item">
                    <p>
                      <strong>Adam:</strong> Świetna strona, zawsze czytam
                      tutaj najnowsze wiadomości! Bardzo przyjazny interfejs.
                    </p>
                  </div>
                  <div className="review__item">
                    <p>
                      <strong>Mateusz:</strong> Świetne podejście! Artykuły są
                      interesujące, zwłaszcza analizy meczów.
                    </p>
                  </div>
                  <div className="review__item">
                    <p>
                      <strong>Mariusz:</strong> Uwielbiam ten portal! Zawsze
                      szybko i rzetelnie – idealne źródło informacji dla fana
                      piłki nożnej.
                    </p>
                  </div>
                </section>
              </div>

              {/* Prawa kolumna */}
              <aside className="content__right">
                <div className="aside__header">
                  <h3>Najnowsze wiadomości</h3>
                </div>
                <section className="aside__news">
                  <div className="news__item">
                    <h4>Nowe treningi reprezentacji</h4>
                    <p>
                      Przygotowania do mistrzostw świata – najświeższe
                      szczegóły procesu treningowego.
                    </p>
                  </div>
                  <div className="news__item">
                    <h4>Rekord sezonu</h4>
                    <p>Ustanowiono nowy rekord zdobytych goli w jednym meczu.</p>
                  </div>
                  <div className="news__item">
                    <h4>Przegląd Turnieju Mistrzów</h4>
                    <p>Szczegóły ostatnich meczów oraz analiza ekspertów.</p>
                  </div>
                  <div className="news__item">
                    <h4>Nowe transfery</h4>
                    <p>
                      Kluby europejskie potwierdzają zainteresowanie czołowymi
                      zawodnikami.
                    </p>
                  </div>
                  <div className="news__item">
                    <h4>Debiut nowego trenera</h4>
                    <p>
                      Znany trener objął stery młodej drużyny z ogromnymi
                      ambicjami.
                    </p>
                  </div>
                  <div className="news__item">
                    <h4>Analiza ekspercka</h4>
                    <p>
                      Specjaliści omawiają taktykę i kluczowe decyzje
                      sędziowskie ostatnich spotkań.
                    </p>
                  </div>
                </section>

                {/* Rankingi */}
                <section className="aside__ranking">
                  <h3>Top 5 drużyn – Liga Mistrzów</h3>
                  <ol>
                    <li>Manchester City</li>
                    <li>Bayern Monachium</li>
                    <li>Arsenal</li>
                    <li>Real Madryt</li>
                    <li>Inter Mediolan</li>
                  </ol>
                </section>

                {/* Polecane */}
                <section className="aside__recommended">
                  <h3>Polecane artykuły</h3>
                  <ul>
                    <li>
                      <a href="#">
                        Taktyczne podejście Guardioli – analiza
                      </a>
                    </li>
                    <li>
                      <a href="#">10 najbardziej pamiętnych meczów dekady</a>
                    </li>
                    <li>
                      <a href="#">Kariera Mbappé – droga na szczyt</a>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
        </main>

        <footer>
          <div className="container">
            <div className="footer__content">
              <div className="footer__left">
                <img
                  src="/Sports-Football-3-icon.png"
                  alt="Logo"
                  className="footer__logo"
                />
                <p>
                  Portal sportowy – Twoje źródło najnowszych wiadomości
                  sportowych.
                </p>
              </div>
              <div className="footer__center">
                <div className="footer__social">
                  <p>
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> |{' '}
                    <a href="#">Instagram</a>
                  </p>
                </div>
              </div>
              <div className="footer__right">
                <p>Projekt: HTML + CSS</p>
                <p>Wybrane Środowiska Programowania 24/25</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
