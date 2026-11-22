import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocationsGlobalOperationsOperationRoute,
  getLocationsGlobalOperationsOperationRoute,
  getLocationsGlobalOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalOrganizationOperationsHandler = app
  .openapi(getLocationsGlobalOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocationsGlobalOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsGlobalOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
