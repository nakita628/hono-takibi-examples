import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationCreateJobActionCreateJobRoute,
  postOperationCreateJobActionCreateJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationCreateJobActionCreateJobHandler = app
  .openapi(getOperationCreateJobActionCreateJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationCreateJobActionCreateJobRoute, (c) => {
    throw new Error('Not implemented')
  })
