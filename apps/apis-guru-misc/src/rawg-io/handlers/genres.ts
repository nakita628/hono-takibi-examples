import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenresIdRoute, getGenresRoute } from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app
  .openapi(getGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
