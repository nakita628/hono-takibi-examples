import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CannedResponsesIdRoute,
  getApiV1CannedResponsesGetRoute,
  getApiV1CannedResponsesIdRoute,
  getApiV1CannedResponsesRoute,
  postApiV1CannedResponsesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cannedResponsesHandler = app
  .openapi(postApiV1CannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CannedResponsesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
