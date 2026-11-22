import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommunicationsGetAllOnlineMeetingMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const communicationsCloudCommunicationsFunctionsHandler = app.openapi(
  getCommunicationsGetAllOnlineMeetingMessagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
