import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserBillingProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const userBillingProfileHandler = app.openapi(getUserBillingProfileRoute, (c) => {
  throw new Error('Not implemented')
})
