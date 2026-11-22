import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRequestsIdEventsRoute,
  getRequestsIdIgnoredEventsRoute,
  getRequestsIdRawBodyRoute,
  getRequestsIdRoute,
  getRequestsRoute,
  postRequestsIdRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(getRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsIdRawBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsIdIgnoredEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
