import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIngesterV1IngesterServiceBlockMetadataRoute,
  postIngesterV1IngesterServiceFlushRoute,
  postIngesterV1IngesterServiceGetBlockStatsRoute,
  postIngesterV1IngesterServiceGetProfileStatsRoute,
  postIngesterV1IngesterServiceLabelNamesRoute,
  postIngesterV1IngesterServiceLabelValuesRoute,
  postIngesterV1IngesterServiceProfileTypesRoute,
  postIngesterV1IngesterServicePushRoute,
  postIngesterV1IngesterServiceSeriesRoute,
} from './routes'
import {
  postIngesterV1IngesterServiceBlockMetadataRouteHandler,
  postIngesterV1IngesterServiceFlushRouteHandler,
  postIngesterV1IngesterServiceGetBlockStatsRouteHandler,
  postIngesterV1IngesterServiceGetProfileStatsRouteHandler,
  postIngesterV1IngesterServiceLabelNamesRouteHandler,
  postIngesterV1IngesterServiceLabelValuesRouteHandler,
  postIngesterV1IngesterServiceProfileTypesRouteHandler,
  postIngesterV1IngesterServicePushRouteHandler,
  postIngesterV1IngesterServiceSeriesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postIngesterV1IngesterServiceBlockMetadataRoute,
    postIngesterV1IngesterServiceBlockMetadataRouteHandler,
  )
  .openapi(postIngesterV1IngesterServiceFlushRoute, postIngesterV1IngesterServiceFlushRouteHandler)
  .openapi(
    postIngesterV1IngesterServiceGetBlockStatsRoute,
    postIngesterV1IngesterServiceGetBlockStatsRouteHandler,
  )
  .openapi(
    postIngesterV1IngesterServiceGetProfileStatsRoute,
    postIngesterV1IngesterServiceGetProfileStatsRouteHandler,
  )
  .openapi(
    postIngesterV1IngesterServiceLabelNamesRoute,
    postIngesterV1IngesterServiceLabelNamesRouteHandler,
  )
  .openapi(
    postIngesterV1IngesterServiceLabelValuesRoute,
    postIngesterV1IngesterServiceLabelValuesRouteHandler,
  )
  .openapi(
    postIngesterV1IngesterServiceProfileTypesRoute,
    postIngesterV1IngesterServiceProfileTypesRouteHandler,
  )
  .openapi(postIngesterV1IngesterServicePushRoute, postIngesterV1IngesterServicePushRouteHandler)
  .openapi(
    postIngesterV1IngesterServiceSeriesRoute,
    postIngesterV1IngesterServiceSeriesRouteHandler,
  )

export default app
