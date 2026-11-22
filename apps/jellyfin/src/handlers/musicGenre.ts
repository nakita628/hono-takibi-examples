import { OpenAPIHono } from '@hono/zod-openapi'
import { getMusicGenresGenreNameRoute } from '../routes'

const app = new OpenAPIHono()

export const musicGenreHandler = app.openapi(getMusicGenresGenreNameRoute, (c) => {
  throw new Error('Not implemented')
})
