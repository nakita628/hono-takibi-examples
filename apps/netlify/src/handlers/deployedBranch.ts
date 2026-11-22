import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitesSiteIdDeployedBranchesRoute } from '../routes'

const app = new OpenAPIHono()

export const deployedBranchHandler = app.openapi(getSitesSiteIdDeployedBranchesRoute, (c) => {
  throw new Error('Not implemented')
})
