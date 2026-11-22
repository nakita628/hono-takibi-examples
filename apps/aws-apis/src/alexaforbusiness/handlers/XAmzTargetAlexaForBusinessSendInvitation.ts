import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSendInvitationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessSendInvitationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSendInvitationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
