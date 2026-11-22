import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectOperationsOperationRoute,
  getV1ProjectsProjectOperationsRoute,
  postV1ProjectsProjectOperationsOperationCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getV1ProjectsProjectOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectOperationsOperationCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
