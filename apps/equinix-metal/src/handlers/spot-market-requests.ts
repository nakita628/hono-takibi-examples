import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSpotMarketRequestsIdRoute, getSpotMarketRequestsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const spotMarketRequestsHandler = app
  .openapi(deleteSpotMarketRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpotMarketRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
