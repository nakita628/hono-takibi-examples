import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeAnyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeAnyHandler = app.openapi(getRepositorySearchTypeAnyRoute, (c) => {
  throw new Error('Not implemented')
})
