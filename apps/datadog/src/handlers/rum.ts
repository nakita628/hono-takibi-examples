import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumApplicationsIdRoute,
  deleteApiV2SourcemapsRoute,
  getApiV2RumApplicationsIdRoute,
  getApiV2RumApplicationsRoute,
  getApiV2RumEventsRoute,
  getApiV2SourcemapsListRoute,
  getApiV2SourcemapsRoute,
  patchApiV2RumApplicationsIdRoute,
  patchApiV2SourcemapsRestoreRoute,
  postApiV2RumAnalyticsAggregateRoute,
  postApiV2RumApplicationsRoute,
  postApiV2RumEventsSearchRoute,
  postApiV2SourcemapsServiceRepositoryInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumHandler = app
  .openapi(postApiV2RumAnalyticsAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RumApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SourcemapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SourcemapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SourcemapsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SourcemapsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SourcemapsServiceRepositoryInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
