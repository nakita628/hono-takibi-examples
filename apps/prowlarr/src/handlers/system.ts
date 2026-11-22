import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SystemRoutesDuplicateRoute,
  getApiV1SystemRoutesRoute,
  getApiV1SystemStatusRoute,
  postApiV1SystemRestartRoute,
  postApiV1SystemShutdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getApiV1SystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemRoutesDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
