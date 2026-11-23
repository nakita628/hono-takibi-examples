import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentsEnvironmentUidRoute,
  getEnvironmentsEnvironmentUidRoute,
  getEnvironmentsRoute,
  postEnvironmentsRoute,
  putEnvironmentsEnvironmentUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsEnvironmentUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnvironmentsEnvironmentUidRoute, (c) => {
    throw new Error('Not implemented')
  })
