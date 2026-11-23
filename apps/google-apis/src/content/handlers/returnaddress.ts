import { OpenAPIHono } from '@hono/zod-openapi'
import { postReturnaddressBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const returnaddressHandler = app.openapi(postReturnaddressBatchRoute, (c) => {
  throw new Error('Not implemented')
})
