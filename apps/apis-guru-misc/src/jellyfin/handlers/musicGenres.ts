import { OpenAPIHono } from '@hono/zod-openapi'
import { getMusicGenresGenreNameRoute, getMusicGenresRoute } from '../routes'

const app = new OpenAPIHono()

export const musicGenresHandler = app
  .openapi(getMusicGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresGenreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
