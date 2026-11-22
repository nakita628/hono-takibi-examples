import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdMsgMsgIdContentRoute,
  getApiV1AppAppIdMsgMsgIdRoute,
  getApiV1AppAppIdMsgRoute,
  postApiV1AppAppIdMsgBulkExpungeRoute,
  postApiV1AppAppIdMsgRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageHandler = app
  .openapi(getApiV1AppAppIdMsgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdMsgMsgIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgBulkExpungeRoute, (c) => {
    throw new Error('Not implemented')
  })
