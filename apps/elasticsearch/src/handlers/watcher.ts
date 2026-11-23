import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWatcherWatchIdRoute,
  getWatcherQueryWatchesRoute,
  getWatcherSettingsRoute,
  getWatcherStatsMetricRoute,
  getWatcherStatsRoute,
  getWatcherWatchIdRoute,
  postWatcherQueryWatchesRoute,
  postWatcherStartRoute,
  postWatcherStopRoute,
  postWatcherWatchExecuteRoute,
  postWatcherWatchIdExecuteRoute,
  postWatcherWatchIdRoute,
  postWatcherWatchWatchIdAckActionIdRoute,
  postWatcherWatchWatchIdAckRoute,
  postWatcherWatchWatchIdActivateRoute,
  postWatcherWatchWatchIdDeactivateRoute,
  putWatcherSettingsRoute,
  putWatcherWatchExecuteRoute,
  putWatcherWatchIdExecuteRoute,
  putWatcherWatchIdRoute,
  putWatcherWatchWatchIdAckActionIdRoute,
  putWatcherWatchWatchIdAckRoute,
  putWatcherWatchWatchIdActivateRoute,
  putWatcherWatchWatchIdDeactivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watcherHandler = app
  .openapi(putWatcherWatchWatchIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchWatchIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherWatchWatchIdAckActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchWatchIdAckActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherWatchWatchIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchWatchIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherWatchWatchIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchWatchIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatcherWatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherWatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWatcherWatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherWatchIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherWatchExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherWatchExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatcherSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWatcherSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatcherQueryWatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherQueryWatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatcherStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWatcherStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatcherStopRoute, (c) => {
    throw new Error('Not implemented')
  })
