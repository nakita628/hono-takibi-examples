import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSendBulkTemplatedEmailRoute,
  postActionSendBulkTemplatedEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSendBulkTemplatedEmailHandler = app
  .openapi(getActionSendBulkTemplatedEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendBulkTemplatedEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
