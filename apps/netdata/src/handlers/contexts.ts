import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ContextRoute,
  getApiV1ContextsRoute,
  getApiV2ContextsRoute,
  getApiV2QRoute,
  getApiV3ContextRoute,
  getApiV3ContextsRoute,
  getApiV3QRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextsHandler = app
  .openapi(getApiV2ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ContextRoute, (c) => {
    throw new Error('Not implemented')
  })
