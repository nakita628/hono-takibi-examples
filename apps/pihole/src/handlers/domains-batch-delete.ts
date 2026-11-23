import { OpenAPIHono } from '@hono/zod-openapi'
import { postDomainsBatchDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const domainsBatchDeleteHandler = app.openapi(postDomainsBatchDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
