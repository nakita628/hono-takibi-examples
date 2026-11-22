import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTeamsListRoute, postAdminTeamsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsHandler = app
  .openapi(postAdminTeamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTeamsListRoute, (c) => {
    throw new Error('Not implemented')
  })
