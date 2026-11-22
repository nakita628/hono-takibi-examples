import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfullnamematchRoute } from '../routes'

const app = new OpenAPIHono()

export const fullNameMatchSimilarityKeyHandler = app.openapi(getGetfullnamematchRoute, (c) => {
  throw new Error('Not implemented')
})
