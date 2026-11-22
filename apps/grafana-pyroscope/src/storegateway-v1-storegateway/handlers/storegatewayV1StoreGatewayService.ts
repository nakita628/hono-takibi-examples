import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStoregatewayV1StoreGatewayServiceBlockMetadataRoute,
  postStoregatewayV1StoreGatewayServiceGetBlockStatsRoute,
  postStoregatewayV1StoreGatewayServiceLabelNamesRoute,
  postStoregatewayV1StoreGatewayServiceLabelValuesRoute,
  postStoregatewayV1StoreGatewayServiceProfileTypesRoute,
  postStoregatewayV1StoreGatewayServiceSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storegatewayV1StoreGatewayServiceHandler = app
  .openapi(postStoregatewayV1StoreGatewayServiceBlockMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoregatewayV1StoreGatewayServiceGetBlockStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoregatewayV1StoreGatewayServiceLabelNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoregatewayV1StoreGatewayServiceLabelValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoregatewayV1StoreGatewayServiceProfileTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoregatewayV1StoreGatewayServiceSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
