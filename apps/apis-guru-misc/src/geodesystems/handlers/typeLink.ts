import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const typeLinkHandler = app.openapi(getRepositorySearchTypeLinkRoute, (c) => {
  throw new Error('Not implemented')
})
