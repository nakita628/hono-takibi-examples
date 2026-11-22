import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LogIndexRoute,
  getApiV1LogPkRoute,
  getApiV1LogRecentActivityIndexRoute,
  postApiV1LogIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logRestApiHandler = app
  .openapi(getApiV1LogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogRecentActivityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogPkRoute, (c) => {
    throw new Error('Not implemented')
  })
