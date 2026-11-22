import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const DisassociateApplicationsHandler = app.openapi(
  postDisassociateApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
