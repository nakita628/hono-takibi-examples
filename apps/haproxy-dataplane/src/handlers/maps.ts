import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyRuntimeMapsNameRoute,
  deleteServicesHaproxyRuntimeMapsParentNameEntriesIdRoute,
  getServicesHaproxyRuntimeMapsNameRoute,
  getServicesHaproxyRuntimeMapsParentNameEntriesIdRoute,
  getServicesHaproxyRuntimeMapsParentNameEntriesRoute,
  getServicesHaproxyRuntimeMapsRoute,
  postServicesHaproxyRuntimeMapsParentNameEntriesRoute,
  putServicesHaproxyRuntimeMapsNameRoute,
  putServicesHaproxyRuntimeMapsParentNameEntriesIdRoute,
  putServicesHaproxyRuntimeMapsParentNameEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mapsHandler = app
  .openapi(getServicesHaproxyRuntimeMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeMapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeMapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeMapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeMapsParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeMapsParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeMapsParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeMapsParentNameEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeMapsParentNameEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeMapsParentNameEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
