import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalOperationsOperationRoute,
  getProjectsProjectAggregatedOperationsRoute,
  getProjectsProjectGlobalOperationsOperationRoute,
  getProjectsProjectGlobalOperationsRoute,
  postProjectsProjectGlobalOperationsOperationWaitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalOperationsHandler = app
  .openapi(getProjectsProjectAggregatedOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalOperationsOperationWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
