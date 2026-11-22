import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1EventTypeEventTypeNameIndexRoute,
  getApiV1EventTypeEventTypeNameIndexRoute,
  getApiV1EventTypeIndexRoute,
  postApiV1EventTypeIndexRoute,
  putApiV1EventTypeEventTypeNameIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTypeHandler = app
  .openapi(getApiV1EventTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EventTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EventTypeEventTypeNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventTypeEventTypeNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EventTypeEventTypeNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
