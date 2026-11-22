import { OpenAPIHono } from '@hono/zod-openapi'
import { postTeamworkSendActivityNotificationToRecipientsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamworkTeamworkActionsHandler = app.openapi(
  postTeamworkSendActivityNotificationToRecipientsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
