import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2TopUpLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const topUpLinksHandler = app.openapi(postV2TopUpLinksRoute, (c) => {
  throw new Error('Not implemented')
})
