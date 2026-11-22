import { OpenAPIHono } from '@hono/zod-openapi'
import { postTeamworkMicrosoftGraphSendActivityNotificationToRecipientsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamworkActionsHandler = app.openapi(
  postTeamworkMicrosoftGraphSendActivityNotificationToRecipientsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
