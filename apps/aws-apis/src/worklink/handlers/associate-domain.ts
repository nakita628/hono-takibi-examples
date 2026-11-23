import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const associateDomainHandler = app.openapi(postAssociateDomainRoute, (c) => {
  throw new Error('Not implemented')
})
