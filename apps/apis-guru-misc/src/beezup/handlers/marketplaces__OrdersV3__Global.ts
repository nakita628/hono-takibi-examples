import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeRoute,
  getOrdersV3StatusRoute,
  postOrdersV3HarvestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__OrdersV3__GlobalHandler = app
  .openapi(postOrdersV3HarvestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersV3LovOrderManagementReadyMarketplaceBusinessCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersV3StatusRoute, (c) => {
    throw new Error('Not implemented')
  })
