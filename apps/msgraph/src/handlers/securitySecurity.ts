import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecurityRoute, patchSecurityRoute } from '../routes'

const app = new OpenAPIHono()

export const securitySecurityHandler = app
  .openapi(getSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
