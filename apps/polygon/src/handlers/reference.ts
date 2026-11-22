import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStocksFilings10KVX0SectionsRoute,
  getStocksFilings10KVXSectionsRoute,
  getStocksFilings8KVXDisclosuresRoute,
  getStocksFilings8KVXTextRoute,
  getStocksFilingsVX13FRoute,
  getStocksFilingsVXForm3Route,
  getStocksFilingsVXForm4Route,
  getStocksFilingsVXForm5Route,
  getStocksFilingsVXIndexRoute,
  getStocksFilingsVXRiskFactorsRoute,
  getStocksInsidersVXActivityRoute,
  getStocksInsidersVXHoldingsRoute,
  getStocksTaxonomiesVXDisclosuresRoute,
  getStocksTaxonomiesVXRiskFactorsRoute,
  getStocksV1ShortInterestRoute,
  getStocksV1ShortVolumeRoute,
  getStocksVXFloatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceHandler = app
  .openapi(getStocksFilings10KVXSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilings10KVX0SectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilings8KVXDisclosuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilings8KVXTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilingsVX13FRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilingsVXForm3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilingsVXForm4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilingsVXForm5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilingsVXIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFilingsVXRiskFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksInsidersVXActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksInsidersVXHoldingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksTaxonomiesVXDisclosuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksTaxonomiesVXRiskFactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksV1ShortInterestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksV1ShortVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksVXFloatRoute, (c) => {
    throw new Error('Not implemented')
  })
