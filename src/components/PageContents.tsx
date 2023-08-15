import React from "react";
import H1 from "./H1";
import LispCode from "./LispCode";
import Link from "./Link";
import Spacer from "./Spacer";

const PageContents = () => {
  return (
    <div
      style={{
        width: "100%",
        fontSize: "1.3rem",
        fontWeight: "normal",
        display: "flex",
        padding: "0 0",
        margin: "0 0",
        color: "#000",
        flexDirection: "column",
      }}
    >
      <H1> {"'links"}</H1>
      <Link
        linkName="soundcloud"
        link="https://soundcloud.com/jumang4423"
        description="music i made"
      />
      <Link
        linkName="github"
        link="https://github.com/jumang4423"
        description="nerdy github with tons of garbage"
      />
      <Link
        linkName="twitter"
        link="https://twitter.com/jumang4423"
        description="useless empty brain inspired tweets"
      />
      <Link
        linkName="discord"
        link="https://discord.gg/29fCzn6Eqq"
        description="server for my friends called 'ぷゅぷゅ'"
      />
      <Link
        linkName="bandcamp"
        link="https://jumango.bandcamp.com/"
        description="buy my music!"
      />
      <H1> {"'about-me"}</H1>
      <LispCode>
        (defparameter *hacker* (make-instance 'hacker :skills (list 'lisp
        'python 'rust 'go 'ts) :knowledge (list 'machine-learning 'compiler
        'emulator '(gameboy 'amiga) 'reverse-engineering '(ghidra 'gdb))
        :languages (list 'japanese 'english) :tools (list 'emacs
        'kinesis-advantage 'nix) :devices (list 'macbook-pro-14
        'thinkpad-x200-with-arch-linux) :focus (list 'machine-learning
        'cycling74-max 'reversing) :recent-interests (list 'stock)))
      </LispCode>
      <br />
      <LispCode>
        (defparameter *musician* (make-instance 'musician :skills (list
        'mix-master-tracks live-performance) :synth-tools (list 'serum
        'kilohertz 'fabfilter 'rx 'waves) :platform 'soundcloud :genre
        'futuristic-kawaii :method (list 'combines-deep-learning-and-music
        'max-patch) :releases (list 'multiple-max-for-live-devices 'max-patches
        'live-project-files) :past-tools (list 'sunvox 'power-tone)))
      </LispCode>
      <br />
      <LispCode>
        (defparameter *jumango* (make-instance 'jumango :hacker *hacker*
        :musician *musician*))
      </LispCode>
      <H1> {"'donation"}</H1>
      <LispCode>
        (defparameter *donate-jumango* (make-instance 'donation :crypto 'ETH
        :address "0x4bd46fE39B1630915687B4EdD3DE582c85C20bF9"))
      </LispCode>
      <Spacer sizePx={333} />
    </div>
  );
};

export default PageContents;
