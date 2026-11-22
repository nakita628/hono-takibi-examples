import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSecurityCsrfTokenIndexRoute,
  postSecurityLoginRoute,
  postSecurityRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityHandler = app
  .openapi(getSecurityCsrfTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
