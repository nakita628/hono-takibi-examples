import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePollRoute } from '../routes'

const app = new OpenAPIHono()

export const typePollHandler = app.openapi(getRepositorySearchTypePollRoute, (c) => {
  throw new Error('Not implemented')
})
