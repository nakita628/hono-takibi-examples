import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAccountsTypeAccountIdRoutingDetailsIdRoute,
  getApiAccountsTypeAccountIdRoutingDetailsIdRoute,
  getApiAccountsTypeAccountIdRoutingDetailsRoute,
  postApiAccountsTypeAccountIdRoutingDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routingDetailHandler = app
  .openapi(getApiAccountsTypeAccountIdRoutingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountsTypeAccountIdRoutingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountsTypeAccountIdRoutingDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAccountsTypeAccountIdRoutingDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
