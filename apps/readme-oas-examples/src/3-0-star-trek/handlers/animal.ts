import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnimalRoute, getAnimalSearchRoute, postAnimalSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const animalHandler = app
  .openapi(getAnimalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnimalSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnimalSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
