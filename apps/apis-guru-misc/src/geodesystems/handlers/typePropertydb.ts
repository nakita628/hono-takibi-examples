import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypePropertydbRoute } from '../routes'

const app = new OpenAPIHono()

export const typePropertydbHandler = app.openapi(getRepositorySearchTypePropertydbRoute, (c) => {
  throw new Error('Not implemented')
})
