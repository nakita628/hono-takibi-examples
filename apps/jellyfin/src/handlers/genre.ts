import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenresGenreNameRoute, getGenresRoute } from '../routes'

const app = new OpenAPIHono()

export const genreHandler = app
  .openapi(getGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresGenreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
