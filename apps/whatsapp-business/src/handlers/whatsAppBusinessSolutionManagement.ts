import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionSolutionIDAcceptDeactivationRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessSolutionManagementHandler = app.openapi(
  postVersionSolutionIDAcceptDeactivationRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
