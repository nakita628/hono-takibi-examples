import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmbeddingsQueryHubScriptsRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddingsHandler = app.openapi(getEmbeddingsQueryHubScriptsRoute, (c) => {
  throw new Error('Not implemented')
})
