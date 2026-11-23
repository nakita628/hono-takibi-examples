import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHoldingsAssetClassificationListRoute,
  getHoldingsHoldingTypeListRoute,
  getHoldingsRoute,
  getHoldingsSecuritiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const holdingsHandler = app
  .openapi(getHoldingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHoldingsAssetClassificationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHoldingsHoldingTypeListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHoldingsSecuritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
