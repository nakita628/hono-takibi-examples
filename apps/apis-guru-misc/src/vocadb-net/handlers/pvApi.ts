import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPvsForSongsRoute } from '../routes'

const app = new OpenAPIHono()

export const pvApiHandler = app.openapi(getApiPvsForSongsRoute, (c) => {
  throw new Error('Not implemented')
})
