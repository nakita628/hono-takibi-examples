import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSendAnnouncementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSendAnnouncementHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSendAnnouncementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
