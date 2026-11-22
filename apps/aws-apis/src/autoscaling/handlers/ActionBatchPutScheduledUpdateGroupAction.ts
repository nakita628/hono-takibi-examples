import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchPutScheduledUpdateGroupActionRoute,
  postActionBatchPutScheduledUpdateGroupActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionBatchPutScheduledUpdateGroupActionHandler = app
  .openapi(getActionBatchPutScheduledUpdateGroupActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchPutScheduledUpdateGroupActionRoute, (c) => {
    throw new Error('Not implemented')
  })
