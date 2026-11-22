import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRecordHandlerProgressRoute,
  postActionRecordHandlerProgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRecordHandlerProgressHandler = app
  .openapi(getActionRecordHandlerProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRecordHandlerProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
