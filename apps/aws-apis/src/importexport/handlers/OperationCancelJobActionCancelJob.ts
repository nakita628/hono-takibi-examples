import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationCancelJobActionCancelJobRoute,
  postOperationCancelJobActionCancelJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const OperationCancelJobActionCancelJobHandler = app
  .openapi(getOperationCancelJobActionCancelJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationCancelJobActionCancelJobRoute, (c) => {
    throw new Error('Not implemented')
  })
