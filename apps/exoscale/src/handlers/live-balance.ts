import { OpenAPIHono } from '@hono/zod-openapi'
import { getLiveBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const liveBalanceHandler = app.openapi(getLiveBalanceRoute, (c) => {
  throw new Error('Not implemented')
})
