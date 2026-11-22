import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessageReactionsIdRoute,
  getMessageReactionsIdRoute,
  getMessageReactionsRoute,
  postMessageReactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageReactionsHandler = app
  .openapi(getMessageReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessageReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessageReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
