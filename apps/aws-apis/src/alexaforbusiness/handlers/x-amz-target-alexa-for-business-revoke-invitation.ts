import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessRevokeInvitationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessRevokeInvitationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessRevokeInvitationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
