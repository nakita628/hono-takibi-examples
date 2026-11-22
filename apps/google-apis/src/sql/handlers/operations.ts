import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSqlV1beta4ProjectsProjectOperationsOperationRoute,
  getSqlV1beta4ProjectsProjectOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getSqlV1beta4ProjectsProjectOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
