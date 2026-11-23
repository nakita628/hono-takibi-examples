import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccounttaxBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const accounttaxHandler = app.openapi(postAccounttaxBatchRoute, (c) => {
  throw new Error('Not implemented')
})
