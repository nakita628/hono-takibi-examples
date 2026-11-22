import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeImageRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeImageHandler = app.openapi(getRepositorySearchTypeTypeImageRoute, (c) => {
  throw new Error('Not implemented')
})
