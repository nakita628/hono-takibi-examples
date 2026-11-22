import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserprofilesProfileIdCustomEventsBatchinsertRoute } from '../routes'

const app = new OpenAPIHono()

export const customEventsHandler = app.openapi(
  postUserprofilesProfileIdCustomEventsBatchinsertRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
