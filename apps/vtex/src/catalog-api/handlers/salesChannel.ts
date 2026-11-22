import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubSaleschannelSalesChannelIdRoute,
  getApiCatalogSystemPvtSaleschannelListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesChannelHandler = app
  .openapi(getApiCatalogSystemPubSaleschannelSalesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSaleschannelListRoute, (c) => {
    throw new Error('Not implemented')
  })
