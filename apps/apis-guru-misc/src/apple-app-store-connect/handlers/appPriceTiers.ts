import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AppPriceTiersIdPricePointsRoute,
  getV1AppPriceTiersIdRoute,
  getV1AppPriceTiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPriceTiersHandler = app
  .openapi(getV1AppPriceTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPriceTiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppPriceTiersIdPricePointsRoute, (c) => {
    throw new Error('Not implemented')
  })
