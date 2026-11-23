import { OpenAPIHono } from '@hono/zod-openapi'
import { postReturnpolicyBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const returnpolicyHandler = app.openapi(postReturnpolicyBatchRoute, (c) => {
  throw new Error('Not implemented')
})
