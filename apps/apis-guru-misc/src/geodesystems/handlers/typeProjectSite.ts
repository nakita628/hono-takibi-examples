import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectSiteRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectSiteHandler = app.openapi(getRepositorySearchTypeProjectSiteRoute, (c) => {
  throw new Error('Not implemented')
})
