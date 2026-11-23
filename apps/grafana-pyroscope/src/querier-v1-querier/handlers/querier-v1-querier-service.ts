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
} from '../routes'

const app = new OpenAPIHono()

export const querierV1QuerierServiceHandler = app
  .openapi(postQuerierV1QuerierServiceAnalyzeQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceGetProfileStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceLabelNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceLabelValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceProfileTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceQueryAnomaliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceSelectHeatmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceSelectMergeProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceSelectMergeSpanProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceSelectMergeStacktracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceSelectSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuerierV1QuerierServiceSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
