import React from 'react';

const Leaderboard = () => {
  const winners = [
    { name: 'Afan', score: 150, place: '1st', color: 'orange' },
    { name: 'Sumeja', score: 100, place: '2nd', color: 'silver' },
    { name: 'Lamija', score: 80, place: '3rd', color: 'red' },
  ];

  return (
    <div className="bg-blue-900 text-white p-12 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-8">LEADERBOARD</h2>
      <h3 className="text-3xl text-center mb-10">Last 3 Winners</h3>
      <div className="flex justify-around">
        {winners.map((winner, index) => (
          <div key={index} className="text-center bg-gray-800 p-8 rounded-lg w-[250px]">
            <div className={`text-${winner.color}-500 text-3xl rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4`}>
              <span className="text-4xl">{winner.place}</span>
            </div>
            <h4 className="text-[30px] text-[#5e17eb] font-semibold font-mono">{winner.name}</h4>
            <p className="text-3xl mt-2">{winner.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;