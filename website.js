// Get elements by ID
const title = document.getElementById('title');
const intro = document.getElementById('intro');
const bodyText = document.getElementById('text');

// Function to generate article content dynamically
function generateArticleContent() {
    const articles = [
        { id: 1, text: 'This is the first article.' },
        { id: 2, text: 'This is the second article.' }
    ];

    articles.forEach((article) => {
        title.textContent = `Title ${article.id}`;
        intro.textContent = `Introduction to ${article.text}`;

        bodyText.innerHTML = '';
        let paragraphs = document.createElement('p');
        paragraphs.textContent = article.text;
        bodyText.appendChild(paragraphs);

        const relatedArticlesElement = document.getElementById('related-articles');
        if (relatedArticlesElement) {
            relatedArticlesElement.innerHTML = '';
            articles.forEach((otherArticle) => {
                const relatedArticleElement = document.createElement('a');
                relatedArticleElement.href = `#${article.id + 1}`;
                relatedArticleElement.textContent = otherArticle.text;
                relatedArticlesElement.appendChild(relatedArticleElement);
            });
        }
    });
}

// Generate article content on page load
generateArticleContent();

// Add event listener to generate article content when user clicks on "Generate new article"
document.getElementById('new-article').addEventListener('click', () => {
    const articleText = prompt("Enter article text:");
    if (articleText) {
        const articles = [
            { id: 1, text: 'This is the first article.' },
            { id: 2, text: 'This is the second article.' }
        ];

        articles.forEach((article) => {
            title.textContent = `Title ${article.id}`;
            intro.textContent = `Introduction to ${article.text}`;

            bodyText.innerHTML = '';
            let paragraphs = document.createElement('p');
            paragraphs.textContent = article.text;
            bodyText.appendChild(paragraphs);

            const relatedArticlesElement = document.getElementById('related-articles');
            if (relatedArticlesElement) {
                relatedArticlesElement.innerHTML = '';
                articles.forEach((otherArticle) => {
                    const relatedArticleElement = document.createElement('a');
                    relatedArticleElement.href = `#${article.id + 1}`;
                    relatedArticleElement.textContent = otherArticle.text;
                    relatedArticlesElement.appendChild(relatedArticleElement);
                });
            }
        });
