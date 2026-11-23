import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationCancelJobActionCancelJobRoute,
  postOperationCancelJobActionCancelJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationCancelJobActionCancelJobHandler = app
  .openapi(getOperationCancelJobActionCancelJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationCancelJobActionCancelJobRoute, (c) => {
    throw new Error('Not implemented')
  })
