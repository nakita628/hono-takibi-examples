import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute,
  getAdAccountsAdAccountIdLeadsSubscriptionsRoute,
  getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute,
  postAdAccountsAdAccountIdLeadsSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leadAdsHandler = app
  .openapi(getAdAccountsAdAccountIdLeadsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdLeadsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
