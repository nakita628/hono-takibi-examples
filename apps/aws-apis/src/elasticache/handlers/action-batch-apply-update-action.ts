import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchApplyUpdateActionRoute,
  postActionBatchApplyUpdateActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionBatchApplyUpdateActionHandler = app
  .openapi(getActionBatchApplyUpdateActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchApplyUpdateActionRoute, (c) => {
    throw new Error('Not implemented')
  })
