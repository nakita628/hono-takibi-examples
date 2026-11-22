import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserBillingHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const userBillingHistoryHandler = app.openapi(getUserBillingHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
