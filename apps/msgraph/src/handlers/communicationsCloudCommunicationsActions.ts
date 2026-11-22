import { OpenAPIHono } from '@hono/zod-openapi'
import { postCommunicationsGetPresencesByUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const communicationsCloudCommunicationsActionsHandler = app.openapi(
  postCommunicationsGetPresencesByUserIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
