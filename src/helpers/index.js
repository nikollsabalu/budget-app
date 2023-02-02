export const generateId = ()=> {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
}

export const formatDate = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return newDate.toLocaleDateString('en-US', options)
}

export const formatYear = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
    }
    return newDate.toLocaleDateString('en-US', options)
}

export const formatAmount = (amount) => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}