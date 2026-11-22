import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute,
  getProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute,
  getProjectsProjectGlobalHttpHealthChecksRoute,
  patchProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute,
  postProjectsProjectGlobalHttpHealthChecksRoute,
  putProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpHealthChecksHandler = app
  .openapi(getProjectsProjectGlobalHttpHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalHttpHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalHttpHealthChecksHttpHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
