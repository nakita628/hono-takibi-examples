import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3MediacoverMovieIdFilenameRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaCoverHandler = app.openapi(getApiV3MediacoverMovieIdFilenameRoute, (c) => {
  throw new Error('Not implemented')
})
