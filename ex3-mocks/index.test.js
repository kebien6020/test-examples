const { fetchPosts, top3Titles } = require('./index')

const fakePosts = [
  {
    "userId": 2,
    "id": 11,
    "title": "Tanquetas del ESMAD ahora disparan agua con jabón",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "Perro aprende a controlar esfínteres para que no lo saquen más",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    "userId": 2,
    "id": 13,
    "title": "Aseguran que Padres e Hijos predijo el Coronavirus",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    "userId": 2,
    "id": 14,
    "title": "Nuevo contrato con Uber incluye venta de alma del usuario",
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    "userId": 2,
    "id": 15,
    "title": "Por falta de técnico, jugadores de Millos entrenan siguiendo tutoriales de Youtube",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
]

describe('top3Titles', () => {
  test('returns an array of strings (the titles)', () => {
    const ret = top3Titles(fakePosts)
    expect(ret).toBeInstanceOf(Array)
    for (const elem of ret) {
      expect(typeof elem).toBe('string')
    }
  })

  test('returns 3 results', () => {
    const ret = top3Titles(fakePosts)
    expect(ret).toHaveLength(3)
  })

  test('third title matches with the expected', () => {
    const ret = top3Titles(fakePosts)
    const third = ret[2]
    expect(third).toBe('Aseguran que Padres e Hijos predijo el Coronavirus')
  })
})

const axios = require('axios')

jest.mock('axios')

describe('fetchPosts', () => {
  test('calls axios with the correct url', () => {
    fetchPosts()

    const expectedUrl = expect.stringMatching(/\/posts$/)
    expect(axios.get).toHaveBeenCalledWith(expectedUrl)
  })

  test('returns error null and the posts when axios resolves', async () => {
    axios.get.mockResolvedValue({
      data: fakePosts,
    })
    const ret = await fetchPosts()

    expect(ret.error).toBe(null)
    expect(ret.posts).toEqual(fakePosts)
  })

  test('returns the error message and posts null when axios rejects', async () => {
    axios.get.mockRejectedValue(new Error('Fake error message'))

    const ret = await fetchPosts()

    expect(ret.error).toBe('Fake error message')
    expect(ret.posts).toBe(null)
  })
})
