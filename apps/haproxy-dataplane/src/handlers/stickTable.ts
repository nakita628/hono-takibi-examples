import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicesHaproxyRuntimeStickTablesNameRoute,
  getServicesHaproxyRuntimeStickTablesParentNameEntriesRoute,
  getServicesHaproxyRuntimeStickTablesRoute,
  postServicesHaproxyRuntimeStickTablesParentNameEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stickTableHandler = app
  .openapi(getServicesHaproxyRuntimeStickTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeStickTablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeStickTablesParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeStickTablesParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
