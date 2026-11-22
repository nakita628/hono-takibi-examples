import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionVerifyDomainDkimRoute, postActionVerifyDomainDkimRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionVerifyDomainDkimHandler = app
  .openapi(getActionVerifyDomainDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionVerifyDomainDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
