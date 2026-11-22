import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1EventTypeEventTypeNameRoute,
  getApiV1EventTypeEventTypeNameRoute,
  getApiV1EventTypeRoute,
  patchApiV1EventTypeEventTypeNameRoute,
  postApiV1EventTypeRoute,
  putApiV1EventTypeEventTypeNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventTypeHandler = app
  .openapi(getApiV1EventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
