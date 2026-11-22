import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectIdOperationsOperationIdRoute,
  getProjectsProjectIdOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationHandler = app
  .openapi(getProjectsProjectIdOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
