import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatusBuildinfoRoute,
  getStatusConfigRoute,
  getStatusFlagsRoute,
  getStatusRuntimeinfoRoute,
  getStatusSelfMetricsRoute,
  getStatusTsdbBlocksRoute,
  getStatusTsdbRoute,
  getStatusWalreplayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getStatusConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusRuntimeinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusBuildinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusTsdbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusTsdbBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusWalreplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusSelfMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
