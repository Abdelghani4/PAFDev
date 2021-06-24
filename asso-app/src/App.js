import React,{ useState } from 'react';
import "./App.css"; 

function App() {
  const questions = [
		{
			questionText: "Ta fin d'après midi idéal: ",
			answerOptions: [
				{ answerText: "Posé en terrasse avec des amis", isCorrect: false },
				{ answerText: "Au calme chez moi", isCorrect: false },
				{ answerText: "En train de faire du sport", isCorrect: true },
				{ answerText: "Au cinéma", isCorrect: false },
			],
		},
		{
			questionText: "Ton but en école d'ingé, c'est:",
			answerOptions: [
				{ answerText: "Étendre mes connaissances", isCorrect: false },
				{ answerText: "Trouver ce que je veux faire plus tard", isCorrect: true },
				{ answerText: "Me remettre en forme après 2(ou 3) ans de prépa", isCorrect: false },
				{ answerText: "Profiter à fond après plusieurs années sans sortir", isCorrect: false },
			],
		},
		{
			questionText: "Pendant les vacances, tu as envie de:",
			answerOptions: [
				{ answerText: "Rester chez moi et me reposer", isCorrect: true },
				{ answerText: "Rester chez moi et revoir mes amis", isCorrect: false },
				{ answerText: "Partir en vacances avec mes amis pour décompresser", isCorrect: false },
				{ answerText: "Partir en voyage pour étendre ma culture", isCorrect: false },
			],
		},
		{
			questionText: "Le premier truc que tu mets dans ta valise:",
			answerOptions: [
				{ answerText: "Mon chargeur de téléphone", isCorrect: false },
				{ answerText: "Un livre", isCorrect: false },
				{ answerText: "Mon ordinateur", isCorrect: false },
				{ answerText: "Mes lunettes de soleil", isCorrect: true },
			],
		},
    {
			questionText: "La phrase qui te correspond le plus:",
			answerOptions: [
				{ answerText: "J'aime aller vers les gens", isCorrect: false },
				{ answerText: "Je suis très sociable quand on vient me parler", isCorrect: false },
				{ answerText: "Je suis plus à l'aise en petit comité", isCorrect: false },
				{ answerText: "Je préfère ma propre compagnie", isCorrect: true },
			],
		},
    {
			questionText: "L'appréciation des profs sur ton bulletin: ",
			answerOptions: [
				{ answerText: "Élève dissipé.e", isCorrect: false },
				{ answerText: "Ne s'arrète jamais de parler, que ça soit pour bavarder ou participer", isCorrect: false },
				{ answerText: "Élève plein.e d'énergie, un plaisir", isCorrect: false },
				{ answerText: "Très bon élève, mais trop discret à l'oral", isCorrect: true },
			],
		},
    {
			questionText: "Ta passion dans la vie",
			answerOptions: [
				{ answerText: "Sortir", isCorrect: false },
				{ answerText: "Manger", isCorrect: false },
				{ answerText: "Le sport", isCorrect: false },
				{ answerText: "Les jeux (société, vidéo, etc.)", isCorrect: true },
			],
		},
    {
			questionText: "Ton meilleur pote c'est:",
			answerOptions: [
				{ answerText: "Un grand sportif", isCorrect: false },
				{ answerText: "Ton partenaire de soirée", isCorrect: false },
				{ answerText: "La personne qui est toujours chez toi", isCorrect: false },
				{ answerText: "Quelqu'un passioné par les mêmes choses que toi", isCorrect: true },
			],
		},
    {
			questionText: "Ton réseau social préféré:",
			answerOptions: [
				{ answerText: "TikTok", isCorrect: false },
				{ answerText: "Instagram", isCorrect: false },
				{ answerText: "Twitter", isCorrect: false },
				{ answerText: "Aucun, je n'aime pas ça", isCorrect: true },
			],
		},
    {
			questionText: "Tu as passé tes différents confinement:",
			answerOptions: [
				{ answerText: "À bosser tous les matins dès 8h", isCorrect: false },
				{ answerText: "Sur Netflix", isCorrect: false },
				{ answerText: "Avec des potes", isCorrect: false },
				{ answerText: "Avec ta famille", isCorrect: true },
			],
		},
    {
			questionText: "Un aspect primordial du métier d'ingénieur: ",
			answerOptions: [
				{ answerText: "Le respect des autres et de l'environnement", isCorrect: false },
				{ answerText: "Bien gagner sa vie", isCorrect: false },
				{ answerText: "Avoir des compétences techniques développées", isCorrect: false },
				{ answerText: "Savoir communiquer", isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
  
}

export default App;
