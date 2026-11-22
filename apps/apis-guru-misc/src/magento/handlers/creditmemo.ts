import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CreditmemoRoute } from '../routes'

const app = new OpenAPIHono()

export const creditmemoHandler = app.openapi(postV1CreditmemoRoute, (c) => {
  throw new Error('Not implemented')
})
