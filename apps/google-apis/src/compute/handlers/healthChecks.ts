import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalHealthChecksHealthCheckRoute,
  getProjectsProjectAggregatedHealthChecksRoute,
  getProjectsProjectGlobalHealthChecksHealthCheckRoute,
  getProjectsProjectGlobalHealthChecksRoute,
  patchProjectsProjectGlobalHealthChecksHealthCheckRoute,
  postProjectsProjectGlobalHealthChecksRoute,
  putProjectsProjectGlobalHealthChecksHealthCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthChecksHandler = app
  .openapi(getProjectsProjectAggregatedHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
