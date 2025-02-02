const skills = [
    { name: "Python", icon: "icons/python.png" },
    { name: "Machine Learning", icon: "icons/machine-learning.png" },
    { name: "Deep Learning", icon: "icons/deep-learning.png" },
    { name: "Data Science", icon: "icons/data-science.png" },
    { name: "TensorFlow", icon: "icons/tensorflow.png" },
    { name: "PyTorch", icon: "icons/pytorch.png" },
    { name: "NLP", icon: "icons/nlp.png" },
    { name: "React", icon: "icons/react.png" },
    { name: "Flask", icon: "icons/flask.png" },
    { name: "AWS", icon: "icons/aws.png" },
    { name: "SQL", icon: "icons/sql.png" },
    { name: "Tableau", icon: "icons/tableau.png" },
    // Add more skills here
];

const skillsGrid = document.querySelector(".skills-grid");

skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill");
    skillCard.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name}">
        <p>${skill.name}</p>
    `;
    skillsGrid.appendChild(skillCard);
});
