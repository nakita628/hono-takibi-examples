import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessPutInvitationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessPutInvitationConfigurationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessPutInvitationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
