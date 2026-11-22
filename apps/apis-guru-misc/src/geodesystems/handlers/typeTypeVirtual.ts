import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeVirtualRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeVirtualHandler = app.openapi(getRepositorySearchTypeTypeVirtualRoute, (c) => {
  throw new Error('Not implemented')
})
