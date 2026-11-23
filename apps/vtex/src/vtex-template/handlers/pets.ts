import { OpenAPIHono } from '@hono/zod-openapi'
import { getPetsPetIdRoute, getPetsRoute, postPetsRoute } from '../routes'

const app = new OpenAPIHono()

export const petsHandler = app
  .openapi(getPetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPetsPetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
