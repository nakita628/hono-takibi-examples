import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeOpendaplinkRoute } from '../routes'

const app = new OpenAPIHono()

export const typeOpendaplinkHandler = app.openapi(getRepositorySearchTypeOpendaplinkRoute, (c) => {
  throw new Error('Not implemented')
})
