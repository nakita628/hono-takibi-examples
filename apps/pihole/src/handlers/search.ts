import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchDomainRoute, (c) => {
  throw new Error('Not implemented')
})
