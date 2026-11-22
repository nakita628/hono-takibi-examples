import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDomainRoute, postActionCreateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDomainHandler = app
  .openapi(getActionCreateDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
