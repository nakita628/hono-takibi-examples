import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStoregatewayV1StoreGatewayServiceBlockMetadataRoute,
  postStoregatewayV1StoreGatewayServiceGetBlockStatsRoute,
  postStoregatewayV1StoreGatewayServiceLabelNamesRoute,
  postStoregatewayV1StoreGatewayServiceLabelValuesRoute,
  postStoregatewayV1StoreGatewayServiceProfileTypesRoute,
  postStoregatewayV1StoreGatewayServiceSeriesRoute,
} from './routes'
import {
  postStoregatewayV1StoreGatewayServiceBlockMetadataRouteHandler,
  postStoregatewayV1StoreGatewayServiceGetBlockStatsRouteHandler,
  postStoregatewayV1StoreGatewayServiceLabelNamesRouteHandler,
  postStoregatewayV1StoreGatewayServiceLabelValuesRouteHandler,
  postStoregatewayV1StoreGatewayServiceProfileTypesRouteHandler,
  postStoregatewayV1StoreGatewayServiceSeriesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postStoregatewayV1StoreGatewayServiceBlockMetadataRoute,
    postStoregatewayV1StoreGatewayServiceBlockMetadataRouteHandler,
  )
  .openapi(
    postStoregatewayV1StoreGatewayServiceGetBlockStatsRoute,
    postStoregatewayV1StoreGatewayServiceGetBlockStatsRouteHandler,
  )
  .openapi(
    postStoregatewayV1StoreGatewayServiceLabelNamesRoute,
    postStoregatewayV1StoreGatewayServiceLabelNamesRouteHandler,
  )
  .openapi(
    postStoregatewayV1StoreGatewayServiceLabelValuesRoute,
    postStoregatewayV1StoreGatewayServiceLabelValuesRouteHandler,
  )
  .openapi(
    postStoregatewayV1StoreGatewayServiceProfileTypesRoute,
    postStoregatewayV1StoreGatewayServiceProfileTypesRouteHandler,
  )
  .openapi(
    postStoregatewayV1StoreGatewayServiceSeriesRoute,
    postStoregatewayV1StoreGatewayServiceSeriesRouteHandler,
  )

export default app
