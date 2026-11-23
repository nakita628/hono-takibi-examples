import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommerceSubscriptionItemsSubscriptionItemIdRoute,
  getCommercePlansRoute,
  getCommerceSubscriptionItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commerceHandler = app
  .openapi(getCommercePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommerceSubscriptionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommerceSubscriptionItemsSubscriptionItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
