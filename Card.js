class Card{
    constructor(type, name, value)
    {
        this.type = type;
        this.name = name;
        this.value = value;
    }

    get Type()
    {
        return this.type;
    }

    get Name()
    {
        return this.name;
    }

    get Value()
    {
        return this.value;
    }

    toString()
    {
        return `Type: ${this.type} , name: ${this.name}`;
    }

}
module.exports = Card;
