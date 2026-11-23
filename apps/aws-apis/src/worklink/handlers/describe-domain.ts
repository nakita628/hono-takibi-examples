import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const describeDomainHandler = app.openapi(postDescribeDomainRoute, (c) => {
  throw new Error('Not implemented')
})
