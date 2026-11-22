import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1ScreenerMarketTypeMoversRoute,
  getV1beta1ScreenerStocksMostActivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const screenerHandler = app
  .openapi(getV1beta1ScreenerMarketTypeMoversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ScreenerStocksMostActivesRoute, (c) => {
    throw new Error('Not implemented')
  })
