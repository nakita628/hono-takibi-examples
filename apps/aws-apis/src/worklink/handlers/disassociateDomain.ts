import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const disassociateDomainHandler = app.openapi(postDisassociateDomainRoute, (c) => {
  throw new Error('Not implemented')
})
