// Expanded lists of keywords and phrases for AI and Human text classification
const aiPhrases = [
    'Artificial Intelligence', 'Machine Learning', 'Data Analysis', 'Predictive Modeling',
    'Natural Language Processing', 'Neural Networks', 'Deep Learning', 'Algorithmic Efficiency',
    'Computational Complexity', 'Statistical Analysis', 'Model Accuracy', 'Training Data',
    'Feature Engineering', 'Hyperparameters', 'Feature Extraction', 'Optimization Techniques',
    'Empirical Evidence', 'Benchmarking', 'Framework', 'Scalability', 'Algorithmic Processing',
    'Computational Resources', 'Loss Function', 'Gradient Descent', 'Data Interpretation',
    'Statistical Significance', 'Theoretical Framework', 'Performance Metrics', 'Generative Models',
    'Transfer Learning', 'Reinforcement Learning', 'Unsupervised Learning', 'Supervised Learning',
    'Feature Vector', 'Embedding Layer', 'Attention Mechanism', 'Model Deployment', 'Cloud Computing',
    'Analytics', 'Insight Generation', 'Data Mining', 'Data Preprocessing', 'Algorithm Optimization',
    'Decision Trees', 'Support Vector Machines', 'K-Means Clustering', 'Dimensionality Reduction',
    'Cross-Validation', 'Hyperparameter Tuning', 'Predictive Analytics', 'Data Visualization',
    'Feature Selection', 'Anomaly Detection', 'Robustness Testing', 'Model Validation',
    'Automated Systems', 'AI Models', 'Algorithm Design', 'Data Collection', 'Statistical Modeling',
    'Bayesian Inference', 'Recurrent Layers', 'Convolutional Networks', 'Deep Neural Networks',
    'Probabilistic Models', 'Reinforcement Algorithms', 'Feature Map', 'Model Training',
    'Data Enrichment', 'Graph Theory'
];

const humanPhrases = [
    'Emotional Impact', 'Personal Experience', 'Life Story', 'Human Connection', 'Empathy',
    'Reflective Thoughts', 'Anecdote', 'Storytelling', 'Subjective Viewpoint', 'Personal Opinion',
    'Genuine Feelings', 'Authentic Experience', 'Everyday Life', 'Cultural Context', 'Personal Growth',
    'Relatable Experiences', 'Unique Perspective', 'Emotional Resonance', 'Human Insight',
    'Creative Expression', 'Individual Perspective', 'Narrative Flow', 'Creative Writing',
    'Personal Reflection', 'Intimate Details', 'Human Experience', 'Sensory Details',
    'Personal Anecdotes', 'Emotional Depth', 'Cultural Significance', 'Personal Challenges',
    'Relatable Narratives', 'Human Interaction', 'Life Lessons', 'Detailed Descriptions',
    'Authentic Voice', 'Candid Thoughts', 'Personal Journey', 'Human Touch', 'Emotional Depth',
    'Human Behavior', 'Personal Insight', 'Life Experiences', 'Authentic Storytelling',
    'Emotional Impact', 'Vivid Imagery', 'Narrative Detail', 'Personal Observation', 'Unique Insight',
    'Cultural Reflection', 'Emotional Connection', 'Relatable Themes', 'First-Person Perspective',
    'Human Condition', 'Subjective Experience', 'Personal Expression', 'Inner Thoughts',
    'Creative Narrative', 'Personal Memoir', 'Emotional Nuance', 'Human Perspective',
    'Detailed Anecdotes', 'Life Reflections', 'Genuine Reactions', 'Storytelling Elements',
    'Intimate Reflections', 'Empathetic Insights', 'Real-Life Experiences'
];

function analyzeText(text) {
    let aiScore = 0;
    let humanScore = 0;

    // Convert the input text to lowercase for comparison
    const lowerText = text.toLowerCase();

    // Count the occurrences of AI and Human phrases
    aiPhrases.forEach(phrase => {
        if (lowerText.includes(phrase.toLowerCase())) {
            aiScore++;
        }
    });

    humanPhrases.forEach(phrase => {
        if (lowerText.includes(phrase.toLowerCase())) {
            humanScore++;
        }
    });

    // Determine the result based on the scores
    if (aiScore > humanScore) {
        return 'AI-generated';
    } else if (humanScore > aiScore) {
        return 'Human-written';
    } else {
        return 'The classification is inconclusive';
    }
}

document.getElementById('analyzeButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();

    if (!inputText) {
        document.getElementById('resultText').textContent = 'Please enter some text.';
        return;
    }

    const result = analyzeText(inputText);
    document.getElementById('resultText').textContent = `The text appears to be: ${result}`;
})
