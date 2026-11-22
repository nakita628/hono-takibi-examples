import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeSlackTeamRoute } from '../routes'

const app = new OpenAPIHono()

export const typeSlackTeamHandler = app.openapi(getRepositorySearchTypeSlackTeamRoute, (c) => {
  throw new Error('Not implemented')
})
