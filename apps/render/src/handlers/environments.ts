import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentsEnvironmentIdResourcesRoute,
  deleteEnvironmentsEnvironmentIdRoute,
  getEnvironmentsEnvironmentIdRoute,
  getEnvironmentsRoute,
  patchEnvironmentsEnvironmentIdRoute,
  postEnvironmentsEnvironmentIdResourcesRoute,
  postEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(postEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentsEnvironmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
