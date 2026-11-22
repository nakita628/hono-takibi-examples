import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryAsyncIdRoute,
  deleteQueryDatasetNameRoute,
  deleteQueryDataSourceNameRoute,
  deleteQueryViewNameRoute,
  getQueryAsyncIdRoute,
  getQueryDatasetNameRoute,
  getQueryDatasetRoute,
  getQueryDataSourceNameRoute,
  getQueryDataSourceRoute,
  getQueryQueriesIdRoute,
  getQueryQueriesRoute,
  getQueryViewNameRoute,
  getQueryViewRoute,
  postQueryAsyncIdStopRoute,
  postQueryAsyncRoute,
  postQueryRoute,
  putQueryDatasetNameRoute,
  putQueryDataSourceNameRoute,
  putQueryViewNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const esqlHandler = app
  .openapi(postQueryAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryAsyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryAsyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryAsyncIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryDataSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueryDataSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryDataSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueryDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryViewNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueryViewNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryViewNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryDataSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
