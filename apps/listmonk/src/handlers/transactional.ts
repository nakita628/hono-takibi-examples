import { OpenAPIHono } from '@hono/zod-openapi'
import { postTxRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionalHandler = app.openapi(postTxRoute, (c) => {
  throw new Error('Not implemented')
})
