import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AppPricePointsIdRoute,
  getV1AppPricePointsIdTerritoryRoute,
  getV1AppPricePointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPricePointsHandler = app
  .openapi(getV1AppPricePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPricePointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPricePointsIdTerritoryRoute, (c) => {
    throw new Error('Not implemented')
  })
