import { OpenAPIHono } from '@hono/zod-openapi'
import { postTxSubmitRoute } from '../routes'

const app = new OpenAPIHono()

export const txHandler = app.openapi(postTxSubmitRoute, (c) => {
  throw new Error('Not implemented')
})
