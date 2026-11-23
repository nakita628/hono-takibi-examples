import { OpenAPIHono } from '@hono/zod-openapi'
import { postRejectresourceshareinvitationRoute } from '../routes'

const app = new OpenAPIHono()

export const rejectresourceshareinvitationHandler = app.openapi(
  postRejectresourceshareinvitationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
