import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchStopUpdateActionRoute,
  postActionBatchStopUpdateActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionBatchStopUpdateActionHandler = app
  .openapi(getActionBatchStopUpdateActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchStopUpdateActionRoute, (c) => {
    throw new Error('Not implemented')
  })
