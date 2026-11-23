import { OpenAPIHono } from '@hono/zod-openapi'
import { postMergeBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const mergeBalanceHandler = app.openapi(postMergeBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
