import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCleanRoute,
  getCleanScanIdRoute,
  getGetfindingsScanIdRoute,
  getInfoRoute,
  getLivenessRoute,
  getReadinessRoute,
  getReloadconfigRoute,
  getRoute,
  getStatusRoute,
  getStatusScanIdRoute,
  getStopScanIdRoute,
  getStopscansRoute,
  getTestRoute,
  postStartscanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const patrowlEngineHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCleanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCleanScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetfindingsScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLivenessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadinessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReloadconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStartscanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopscansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestRoute, (c) => {
    throw new Error('Not implemented')
  })
