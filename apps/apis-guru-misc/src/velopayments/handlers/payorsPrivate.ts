import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PayorLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const payorsPrivateHandler = app.openapi(postV1PayorLinksRoute, (c) => {
  throw new Error('Not implemented')
})
