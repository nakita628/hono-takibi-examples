import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AmpUrlsBatchGetRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(postV1AmpUrlsBatchGetRoute, (c) => {
  throw new Error('Not implemented')
})
