import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute,
  deleteApiV1AbusesAbuseIdRoute,
  getApiV1AbusesAbuseIdMessagesRoute,
  getApiV1AbusesRoute,
  getApiV1UsersMeAbusesRoute,
  postApiV1AbusesAbuseIdMessagesRoute,
  postApiV1AbusesRoute,
  putApiV1AbusesAbuseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abusesHandler = app
  .openapi(getApiV1UsersMeAbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AbusesAbuseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbusesAbuseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AbusesAbuseIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AbusesAbuseIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
