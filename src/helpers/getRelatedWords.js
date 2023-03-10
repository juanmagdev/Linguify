export const getRelatedWords = async (topic, size) => {
    const response = await fetch(`https://api.datamuse.com/words?rel_trg=${topic}`);
    const data = await response.json();
    const relatedWordsArr = data.slice(0, size).map((item) => item.word);
    return relatedWordsArr;
}