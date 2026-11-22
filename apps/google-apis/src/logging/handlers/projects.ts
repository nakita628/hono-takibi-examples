import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2LogNameRoute,
  deleteV2MetricNameRoute,
  deleteV2NameRoute,
  getV2MetricNameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentBucketsRoute,
  getV2ParentExclusionsRoute,
  getV2ParentLinksRoute,
  getV2ParentLogsRoute,
  getV2ParentMetricsRoute,
  getV2ParentRecentQueriesRoute,
  getV2ParentSavedQueriesRoute,
  getV2ParentViewsRoute,
  patchV2NameRoute,
  patchV2SinkNameRoute,
  postV2NameCancelRoute,
  postV2NameUndeleteRoute,
  postV2NameUpdateAsyncRoute,
  postV2ParentBucketsCreateAsyncRoute,
  postV2ParentBucketsRoute,
  postV2ParentExclusionsRoute,
  postV2ParentLinksRoute,
  postV2ParentMetricsRoute,
  postV2ParentSavedQueriesRoute,
  postV2ParentViewsRoute,
  putV2MetricNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV2LogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2MetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2MetricNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameUpdateAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentBucketsCreateAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentRecentQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SinkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
