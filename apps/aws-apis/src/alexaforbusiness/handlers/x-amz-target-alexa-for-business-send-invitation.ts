import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSendInvitationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSendInvitationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSendInvitationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
