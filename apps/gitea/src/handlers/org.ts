import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrgOrgReposRoute } from '../routes'

const app = new OpenAPIHono()

export const orgHandler = app.openapi(postOrgOrgReposRoute, (c) => {
  throw new Error('Not implemented')
})
