import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetInvitationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetInvitationConfigurationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetInvitationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
