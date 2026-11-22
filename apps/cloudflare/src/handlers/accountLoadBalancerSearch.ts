import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdLoadBalancersSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const accountLoadBalancerSearchHandler = app.openapi(
  getAccountsAccountIdLoadBalancersSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
