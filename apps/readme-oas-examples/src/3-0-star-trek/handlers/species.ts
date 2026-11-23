import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpeciesRoute, getSpeciesSearchRoute, postSpeciesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const speciesHandler = app
  .openapi(getSpeciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpeciesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpeciesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
