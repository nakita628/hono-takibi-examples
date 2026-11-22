import { OpenAPIHono } from '@hono/zod-openapi'
import { postAcceptresourceshareinvitationRoute } from '../routes'

const app = new OpenAPIHono()

export const acceptresourceshareinvitationHandler = app.openapi(
  postAcceptresourceshareinvitationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
