import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectTermRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectTermHandler = app.openapi(getRepositorySearchTypeProjectTermRoute, (c) => {
  throw new Error('Not implemented')
})
