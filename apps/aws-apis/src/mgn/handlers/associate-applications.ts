import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const associateApplicationsHandler = app.openapi(postAssociateApplicationsRoute, (c) => {
  throw new Error('Not implemented')
})
