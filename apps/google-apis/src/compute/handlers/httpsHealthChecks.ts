import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute,
  getProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute,
  getProjectsProjectGlobalHttpsHealthChecksRoute,
  patchProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute,
  postProjectsProjectGlobalHttpsHealthChecksRoute,
  putProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const httpsHealthChecksHandler = app
  .openapi(getProjectsProjectGlobalHttpsHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalHttpsHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalHttpsHealthChecksHttpsHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
