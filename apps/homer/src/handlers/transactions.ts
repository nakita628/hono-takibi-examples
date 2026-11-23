import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionsRoute,
  postTransactionsMessagesRoute,
  postTransactionsQosRoute,
  postTransactionsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsQosRoute, (c) => {
    throw new Error('Not implemented')
  })
