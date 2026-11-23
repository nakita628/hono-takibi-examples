import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationUpdateJobActionUpdateJobRoute,
  postOperationUpdateJobActionUpdateJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationUpdateJobActionUpdateJobHandler = app
  .openapi(getOperationUpdateJobActionUpdateJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationUpdateJobActionUpdateJobRoute, (c) => {
    throw new Error('Not implemented')
  })
