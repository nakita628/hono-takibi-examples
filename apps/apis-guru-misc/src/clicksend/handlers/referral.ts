import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferralAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const referralHandler = app.openapi(getReferralAccountsRoute, (c) => {
  throw new Error('Not implemented')
})
