import { OpenAPIHono } from '@hono/zod-openapi'
import { postOpinionsRoute } from '../routes'

const app = new OpenAPIHono()

export const opinionsHandler = app.openapi(postOpinionsRoute, (c) => {
  throw new Error('Not implemented')
})
