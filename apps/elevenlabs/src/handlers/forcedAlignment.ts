import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ForcedAlignmentRoute } from '../routes'

const app = new OpenAPIHono()

export const forcedAlignmentHandler = app.openapi(postV1ForcedAlignmentRoute, (c) => {
  throw new Error('Not implemented')
})
