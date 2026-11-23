import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionVerifyDomainIdentityRoute, postActionVerifyDomainIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const actionVerifyDomainIdentityHandler = app
  .openapi(getActionVerifyDomainIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionVerifyDomainIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
