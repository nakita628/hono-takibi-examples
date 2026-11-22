import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdMsgMsgIdContentIndexRoute,
  getApiV1AppAppIdMsgIndexRoute,
  getApiV1AppAppIdMsgMsgIdIndexRoute,
  postApiV1AppAppIdMsgIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageHandler = app
  .openapi(getApiV1AppAppIdMsgIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdMsgMsgIdContentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
