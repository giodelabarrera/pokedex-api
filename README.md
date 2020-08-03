# Pokedex API

Pokédex REST API serving the characters of pokemon.

## Getting started

### Installation

```sh
npm i
```

### Server

```sh
npm start
```

Now you can make requests to http://localhost:3030

## Endpoints

### Pokemon list

`GET /pokemon`

#### Paramaters

| Name     | Type       | Description                     | Default        |
| -------- | ---------- | ------------------------------- | -------------- |
| `query`  | `string`   | Word to search (Number or Name) |                |
| `types`  | `string[]` | Types                           |                |
| `sort`   | `string`   | Sort                            | highest_number | a_z | z_a) | lowest_number |
| `limit`  | `number`   | Number limit for results        | 12             |
| `offset` | `number`   | Results page index.             | 0              |

**Example**

`/pokemon?query=char&types[]=Fire&sort=lowest_number&limit=12&offset=0`

#### Response

**Code**

`200`

**Body raw**

```json
{
  "total": 5,
  "results": [
    {
      "id": 4,
      "name": {
        "english": "Charmander",
        "japanese": "ヒトカゲ",
        "chinese": "小火龙",
        "french": "Salamèche"
      },
      "type": ["Fire"],
      "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Sp. Attack": 60,
        "Sp. Defense": 50,
        "Speed": 65
      }
    }
  ]
}
```

### Pokemon single

`GET /pokemon/{id or name}`

**Example**

`/pokemon/pikachu`

#### Response

**Code**

`200`

**Body raw**

```json
{
  "id": 25,
  "name": {
    "english": "Pikachu",
    "japanese": "ピカチュウ",
    "chinese": "皮卡丘",
    "french": "Pikachu"
  },
  "type": ["Electric"],
  "base": {
    "HP": 35,
    "Attack": 55,
    "Defense": 40,
    "Sp. Attack": 50,
    "Sp. Defense": 50,
    "Speed": 90
  }
}
```

## License

MIT © Giorgio de la Barrera
