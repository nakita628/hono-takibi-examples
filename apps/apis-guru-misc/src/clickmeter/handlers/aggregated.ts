import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAggregatedListRoute,
  getAggregatedRoute,
  getAggregatedSummaryConversionsRoute,
  getAggregatedSummaryDatapointsRoute,
  getAggregatedSummaryGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aggregatedHandler = app
  .openapi(getAggregatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAggregatedSummaryConversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAggregatedSummaryDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAggregatedSummaryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
