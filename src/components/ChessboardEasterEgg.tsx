import { useState, useEffect } from 'react';
import { Chess as ChessJS, Square } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import gsap from 'gsap';

export default function ChessboardEasterEgg() {
  const [game, setGame] = useState(new ChessJS());
  const [humanMoves, setHumanMoves] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [arrows, setArrows] = useState<any[]>([]);
  const [kingSquare, setKingSquare] = useState<string | null>(null);
  const [randomPhrase, setRandomPhrase] = useState('');

  function onRetry() {
    setGame(new ChessJS());
    setHumanMoves(0);
    setIsGameOver(false);
    setArrows([]);
    setKingSquare(null);
    gsap.set('.checkmate-banner', { scale: 0, opacity: 0 });
    gsap.set('.bubble-anim', { scale: 0, opacity: 0 });
  }

  useEffect(() => {
    if (game.turn() === 'b' && !isGameOver) {
      if (humanMoves === 1) {
        // First black move
        const timer = setTimeout(() => {
          const newGame = new ChessJS(game.fen());
          const possibleMoves = newGame.moves();
          if (possibleMoves.length > 0) {
            const randomIndex = Math.floor(Math.random() * possibleMoves.length);
            newGame.move(possibleMoves[randomIndex]);
            setGame(newGame);
          }
        }, 500);
        return () => clearTimeout(timer);
      } else if (humanMoves === 2) {
        // Second black move: INFECTION SPREAD
        // Find all white pieces (excluding king)
        const board = game.board();
        let whitePieces: Square[] = [];
        let kSq = 'e1';
        for (let r = 0; r < 8; r++) {
          for (let c = 0; c < 8; c++) {
            const piece = board[r][c];
            if (piece && piece.color === 'w') {
              const files = ['a','b','c','d','e','f','g','h'];
              const sq = `${files[c]}${8 - r}` as Square;
              if (piece.type === 'k') {
                kSq = sq;
              } else {
                // Ensure array has squares to infect
                whitePieces.push(sq);
              }
            }
          }
        }
        setKingSquare(kSq);
        
        let infectionIndex = 0;
        // Start infecting 600ms after the human move
        const startTimer = setTimeout(() => {
          const interval = setInterval(() => {
            if (infectionIndex < whitePieces.length) {
              setGame(g => {
                const newG = new ChessJS(g.fen());
                const sq = whitePieces[infectionIndex];
                const p = newG.get(sq);
                if (p) {
                  newG.remove(sq);
                  newG.put({ type: p.type, color: 'b' }, sq);
                }
                return newG;
              });
              infectionIndex++;
            } else {
              clearInterval(interval);
              const phrases = ['Save meee! 😭', 'Bro wtf?! 💀', 'I trusted u... 💔', 'Not again!!! 💀', 'Help me KB! 😭', 'What did u do?! 🤡', 'Traitor! 🔪'];
              setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
              setIsGameOver(true);
              
              setTimeout(() => {
                gsap.fromTo('.bubble-anim', 
                  { scale: 0, y: 20, opacity: 0 }, 
                  { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: 'back.out(2)' }
                );
              }, 100);
              
              // Delay the banner so they read the bubble
              setTimeout(() => {
                gsap.to('.bubble-anim', { opacity: 0, scale: 0, duration: 0.4 });
                gsap.to('.checkmate-banner', 
                  { scale: 1, rotation: 3, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.4)' }
                );
              }, 1200);
            }
          }, 150); // Flip one piece every 150ms!
        }, 600);
        
        return () => clearTimeout(startTimer);
      }
    }
  }, [humanMoves, game, isGameOver]);

  function onDrop(sourceSquare: string, targetSquare: string) {
    if (isGameOver || game.turn() === 'b') return false;
    try {
      const newGame = new ChessJS(game.fen());
      const move = newGame.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });
      if (move === null) return false;
      
      setGame(newGame);
      setHumanMoves(c => c + 1);
      return true;
    } catch (e) {
      return false;
    }
  }

  function getKingPosCSS(sq: string) {
    const fileIndex = sq.charCodeAt(0) - 'a'.charCodeAt(0);
    const rankIndex = 8 - parseInt(sq[1]);
    return { left: `${fileIndex * 12.5}%`, top: `${rankIndex * 12.5}%` };
  }

  return (
    <section id="ai" className="bg-[#FFC200] py-32 rounded-t-[80px] -mt-16 relative z-40 border-[8px] border-b-0 border-textMain rm-section overflow-visible">
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FF3B00] rounded-full rm-parallax" data-speed="1.5"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#0055FF] rounded-full rm-parallax opacity-20" data-speed="0.5"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 z-10 relative flex flex-col items-center">
         <h2 className="font-syne font-extrabold text-[8vw] md:text-[6vw] leading-[0.8] text-textMain uppercase mb-16 rm-reveal rm-parallax text-center w-full" data-speed="0.2">
           Care for a <span className="text-surface drop-shadow-[0_4px_0_#1A1A1A]">Game?</span>
         </h2>
         
         <div className="relative w-full max-w-[600px] border-[12px] border-textMain rounded-[24px] bg-textMain shadow-[24px_24px_0px_#1A1A1A] p-2">
           {/* @ts-ignore */}
           <Chessboard 
             position={game.fen()} 
             onPieceDrop={onDrop}
             boardOrientation="white"
             customDarkSquareStyle={{ backgroundColor: '#FF3B00' }}
             customLightSquareStyle={{ backgroundColor: '#F0EFE9' }}
             animationDuration={300}
             arePiecesDraggable={!isGameOver}
             customArrows={arrows}
           />
           
           {kingSquare && isGameOver && (
             <div 
               className="absolute z-[999] transform -translate-y-full pointer-events-none w-[12.5%] h-[12.5%]"
               style={getKingPosCSS(kingSquare)}
             >
               <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-surface text-textMain px-[18px] py-[10px] rounded-[16px] text-[16px] md:text-[20px] font-bold shadow-[6px_6px_0_#1A1A1A] border-[4px] border-textMain bubble-anim whitespace-nowrap opacity-0">
                 {randomPhrase}
                 <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[4px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-textMain"></div>
               </div>
             </div>
           )}

           {isGameOver && (
              <div className="absolute inset-0 z-[150] flex flex-col items-center justify-center p-8 pointer-events-none mt-20">
                <div className="bg-[#FF3B00] border-[8px] border-textMain p-8 md:p-10 text-center rounded-[40px] shadow-[16px_16px_0px_#1A1A1A] checkmate-banner opacity-0 scale-50 pointer-events-auto">
                  <h1 className="font-syne font-extrabold text-[40px] md:text-[48px] leading-[0.9] text-surface uppercase mb-6">
                    CHECKMATE
                  </h1>
                  <p className="text-[20px] font-inter font-bold text-textMain bg-[#FFC200] py-3 px-8 rounded-full mb-8 transform -rotate-3 border-4 border-textMain shadow-[4px_4px_0_#1A1A1A]">
                    You can't beat me bro.
                  </p>
                  <button onClick={onRetry} className="inline-block bg-surface border-4 border-textMain hover:bg-textMain hover:text-surface text-textMain px-8 py-3 font-inter font-bold text-[18px] rounded-[999px] transition-all">
                     TRY AGAIN
                  </button>
                </div>
              </div>
           )}
         </div>
      </div>
    </section>
  );
}
