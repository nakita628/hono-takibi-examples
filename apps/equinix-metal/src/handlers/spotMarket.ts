import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSpotMarketRequestsIdRoute,
  getMarketSpotPricesHistoryRoute,
  getMarketSpotPricesMetrosRoute,
  getMarketSpotPricesRoute,
  getProjectsIdSpotMarketRequestsRoute,
  getSpotMarketRequestsIdRoute,
  postProjectsIdSpotMarketRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spotMarketHandler = app
  .openapi(getMarketSpotPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketSpotPricesHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketSpotPricesMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdSpotMarketRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdSpotMarketRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSpotMarketRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpotMarketRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
