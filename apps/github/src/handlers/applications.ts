import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsClientIdGrantRoute,
  deleteApplicationsClientIdTokenRoute,
  patchApplicationsClientIdTokenRoute,
  postApplicationsClientIdTokenRoute,
  postApplicationsClientIdTokenScopedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(deleteApplicationsClientIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsClientIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsClientIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsClientIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsClientIdTokenScopedRoute, (c) => {
    throw new Error('Not implemented')
  })
