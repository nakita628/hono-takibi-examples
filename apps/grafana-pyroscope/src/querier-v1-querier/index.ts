import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postQuerierV1QuerierServiceAnalyzeQueryRoute,
  postQuerierV1QuerierServiceDiffRoute,
  postQuerierV1QuerierServiceGetProfileStatsRoute,
  postQuerierV1QuerierServiceLabelNamesRoute,
  postQuerierV1QuerierServiceLabelValuesRoute,
  postQuerierV1QuerierServiceProfileTypesRoute,
  postQuerierV1QuerierServiceQueryAnomaliesRoute,
  postQuerierV1QuerierServiceSelectHeatmapRoute,
  postQuerierV1QuerierServiceSelectMergeProfileRoute,
  postQuerierV1QuerierServiceSelectMergeSpanProfileRoute,
  postQuerierV1QuerierServiceSelectMergeStacktracesRoute,
  postQuerierV1QuerierServiceSelectSeriesRoute,
  postQuerierV1QuerierServiceSeriesRoute,
} from './routes'
import {
  postQuerierV1QuerierServiceAnalyzeQueryRouteHandler,
  postQuerierV1QuerierServiceDiffRouteHandler,
  postQuerierV1QuerierServiceGetProfileStatsRouteHandler,
  postQuerierV1QuerierServiceLabelNamesRouteHandler,
  postQuerierV1QuerierServiceLabelValuesRouteHandler,
  postQuerierV1QuerierServiceProfileTypesRouteHandler,
  postQuerierV1QuerierServiceQueryAnomaliesRouteHandler,
  postQuerierV1QuerierServiceSelectHeatmapRouteHandler,
  postQuerierV1QuerierServiceSelectMergeProfileRouteHandler,
  postQuerierV1QuerierServiceSelectMergeSpanProfileRouteHandler,
  postQuerierV1QuerierServiceSelectMergeStacktracesRouteHandler,
  postQuerierV1QuerierServiceSelectSeriesRouteHandler,
  postQuerierV1QuerierServiceSeriesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postQuerierV1QuerierServiceAnalyzeQueryRoute,
    postQuerierV1QuerierServiceAnalyzeQueryRouteHandler,
  )
  .openapi(postQuerierV1QuerierServiceDiffRoute, postQuerierV1QuerierServiceDiffRouteHandler)
  .openapi(
    postQuerierV1QuerierServiceGetProfileStatsRoute,
    postQuerierV1QuerierServiceGetProfileStatsRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceLabelNamesRoute,
    postQuerierV1QuerierServiceLabelNamesRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceLabelValuesRoute,
    postQuerierV1QuerierServiceLabelValuesRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceProfileTypesRoute,
    postQuerierV1QuerierServiceProfileTypesRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceQueryAnomaliesRoute,
    postQuerierV1QuerierServiceQueryAnomaliesRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceSelectHeatmapRoute,
    postQuerierV1QuerierServiceSelectHeatmapRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceSelectMergeProfileRoute,
    postQuerierV1QuerierServiceSelectMergeProfileRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceSelectMergeSpanProfileRoute,
    postQuerierV1QuerierServiceSelectMergeSpanProfileRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceSelectMergeStacktracesRoute,
    postQuerierV1QuerierServiceSelectMergeStacktracesRouteHandler,
  )
  .openapi(
    postQuerierV1QuerierServiceSelectSeriesRoute,
    postQuerierV1QuerierServiceSelectSeriesRouteHandler,
  )
  .openapi(postQuerierV1QuerierServiceSeriesRoute, postQuerierV1QuerierServiceSeriesRouteHandler)

export default app
