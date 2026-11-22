import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3MessagesLogIdIdRoute,
  deleteV3MessagesLogIdRoute,
  getV3MessagesLogIdIdRoute,
  getV3MessagesLogIdRoute,
  postV3MessagesLogIdBulkRoute,
  postV3MessagesLogIdFixRoute,
  postV3MessagesLogIdIdFixRoute,
  postV3MessagesLogIdIdHideRoute,
  postV3MessagesLogIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(deleteV3MessagesLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3MessagesLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdFixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3MessagesLogIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3MessagesLogIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdIdFixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
