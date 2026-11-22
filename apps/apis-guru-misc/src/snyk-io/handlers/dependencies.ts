import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrgOrgIdDependenciesRoute } from '../routes'

const app = new OpenAPIHono()

export const dependenciesHandler = app.openapi(postOrgOrgIdDependenciesRoute, (c) => {
  throw new Error('Not implemented')
})
