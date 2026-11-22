import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1MovieSearchMovieTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const movieHandler = app.openapi(getApiV1MovieSearchMovieTitleRoute, (c) => {
  throw new Error('Not implemented')
})
