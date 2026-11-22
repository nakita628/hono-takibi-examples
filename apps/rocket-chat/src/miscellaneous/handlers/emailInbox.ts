import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1EmailInboxIdRoute,
  getApiV1EmailInboxIdRoute,
  getApiV1EmailInboxListRoute,
  getApiV1EmailInboxSearchRoute,
  postApiV1EmailInboxRoute,
  postApiV1EmailInboxSendTestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailInboxHandler = app
  .openapi(getApiV1EmailInboxListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmailInboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmailInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EmailInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmailInboxSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmailInboxSendTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
