import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3SystemRoutesDuplicateRoute,
  getApiV3SystemRoutesRoute,
  getApiV3SystemStatusRoute,
  postApiV3SystemRestartRoute,
  postApiV3SystemShutdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getApiV3SystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3SystemRoutesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
