const request = require('supertest')

describe('GET /products', () => {
  it('should successfully return product list', async () => {
    const response = await request('https://fakestoreapi.com').get('/products')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it('each product must contain required fields', async () => {
    const response = await request('https://fakestoreapi.com').get('/products')
    const product = response.body[0];

    expect(product).toHaveProperty('id')
    expect(product).toHaveProperty('title')
    expect(product).toHaveProperty('price')
    expect(product).toHaveProperty('description')
    expect(product).toHaveProperty('category')
    expect(product).toHaveProperty('image')
    expect(product).toHaveProperty('rating')
    expect(product.rating).toHaveProperty('rate')
    expect(product.rating).toHaveProperty('count')
  })
})