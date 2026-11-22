import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMlDataFrameAnalyticsIdRoute,
  getMlDataFrameAnalyticsExplainRoute,
  getMlDataFrameAnalyticsIdExplainRoute,
  getMlDataFrameAnalyticsIdPreviewRoute,
  getMlDataFrameAnalyticsIdRoute,
  getMlDataFrameAnalyticsIdStatsRoute,
  getMlDataFrameAnalyticsPreviewRoute,
  getMlDataFrameAnalyticsRoute,
  getMlDataFrameAnalyticsStatsRoute,
  postMlDataFrameAnalyticsExplainRoute,
  postMlDataFrameAnalyticsIdExplainRoute,
  postMlDataFrameAnalyticsIdPreviewRoute,
  postMlDataFrameAnalyticsIdStartRoute,
  postMlDataFrameAnalyticsIdStopRoute,
  postMlDataFrameAnalyticsIdUpdateRoute,
  postMlDataFrameAnalyticsPreviewRoute,
  postMlDataFrameEvaluateRoute,
  putMlDataFrameAnalyticsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlDataFrameHandler = app
  .openapi(getMlDataFrameAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMlDataFrameAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMlDataFrameAnalyticsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMlDataFrameAnalyticsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMlDataFrameAnalyticsIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
