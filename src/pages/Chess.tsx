import { useState, useEffect } from 'react';
import { Chess as ChessJS, Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function ChessPage() {
  const [game, setGame] = useState(new ChessJS());
  const [moveCount, setMoveCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  function makeComputerMove() {
    if (moveCount === 0) {
      // First black move: perfectly valid random move
      const possibleMoves = game.moves();
      if (possibleMoves.length > 0) {
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        const newGame = new ChessJS(game.fen());
        newGame.move(possibleMoves[randomIndex]);
        setGame(newGame);
      }
    } else if (moveCount === 1) {
      // Second black move: ILLEGAL TELEPORT
      const newGame = new ChessJS(game.fen());
      
      const board = newGame.board();
      let kingSquare = 'e1';
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (board[r][c] && board[r][c]?.type === 'k' && board[r][c]?.color === 'w') {
            const files = ['a','b','c','d','e','f','g','h'];
            kingSquare = `${files[c]}${8 - r}`;
          }
        }
      }
      
      // Directly modify the board dropping a black Queen right on the white King
      newGame.remove(kingSquare as Square);
      newGame.put({ type: 'q', color: 'b' }, kingSquare as Square);
      
      setGame(newGame);
      setIsGameOver(true);
      
      // Animate savage banner
      setTimeout(() => {
        gsap.fromTo('.checkmate-banner', 
          { scale: 0, rotation: -10, opacity: 0 }, 
          { scale: 1, rotation: 3, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.4)' }
        );
      }, 200);
    }
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    if (isGameOver) return false;
    try {
      const newGame = new ChessJS(game.fen());
      const move = newGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
      if (move === null) return false;
      
      setGame(newGame);
      setMoveCount(c => c + 1);
      setTimeout(makeComputerMove, 600);
      return true;
    } catch (e) {
      return false;
    }
  }

  return (
    <div className="w-full bg-[#0055FF] text-surface min-h-screen pt-[120px] flex flex-col font-inter selection:bg-[#FFC200] selection:text-textMain relative overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between opacity-[0.05] overflow-hidden leading-[0.75]">
        <h1 className="font-syne font-extrabold text-[30vw] tracking-tighter uppercase whitespace-nowrap">CHESS</h1>
        <h1 className="font-syne font-extrabold text-[30vw] tracking-tighter uppercase whitespace-nowrap text-right">MASTER</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col items-center relative z-10 flex-1">
        <div className="text-center mb-12">
          <span className="font-mono tracking-widest bg-textMain text-[#FFC200] px-6 py-2 rounded-full font-bold uppercase">SUPER AI BOT v2.0</span>
          <h2 className="font-syne font-extrabold text-[8vw] md:text-[6vw] leading-[0.8] tracking-tighter uppercase mt-8 mb-4">
             Try to beat me.
          </h2>
          <p className="text-[20px] font-medium text-surface/80">Play White. I dare you to win.</p>
        </div>

        <div className="relative w-full max-w-[600px] border-[12px] border-textMain rounded-[24px] bg-textMain shadow-[24px_24px_0px_#1A1A1A] p-2">
          {/* @ts-ignore */}
          <Chessboard 
            position={game.fen()} 
            onPieceDrop={onDrop}
            boardOrientation="white"
            customDarkSquareStyle={{ backgroundColor: '#FF3B00' }}
            customLightSquareStyle={{ backgroundColor: '#F0EFE9' }}
            animationDuration={300}
          />

          {isGameOver && (
             <div className="checkmate-banner absolute inset-0 z-50 flex items-center justify-center p-8 pointer-events-none">
               <div className="bg-[#FFC200] border-[8px] border-textMain p-10 text-center rounded-[40px] shadow-[16px_16px_0px_#1A1A1A]">
                 <h1 className="font-syne font-extrabold text-[48px] md:text-[64px] leading-[0.9] text-textMain uppercase mb-4">
                   CHECKMATE
                 </h1>
                 <p className="text-[24px] font-inter font-bold text-textMain">You can't beat me bro.</p>
               </div>
             </div>
          )}
        </div>

        <div className="mt-20 mb-20">
           <Link to="/#work" className="inline-block bg-[#FFC200] border-4 border-transparent hover:border-textMain text-textMain px-12 py-5 font-inter font-bold text-[20px] rounded-[999px] magnetic transition-all">
             BACK TO REALITY
           </Link>
        </div>
      </div>
    </div>
  );
}
