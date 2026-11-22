import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrdersV3ListFullRoute, postOrdersV3ListLightRoute } from '../routes'

const app = new OpenAPIHono()

export const marketplaces__OrdersV3__ListHandler = app
  .openapi(postOrdersV3ListFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersV3ListLightRoute, (c) => {
    throw new Error('Not implemented')
  })
