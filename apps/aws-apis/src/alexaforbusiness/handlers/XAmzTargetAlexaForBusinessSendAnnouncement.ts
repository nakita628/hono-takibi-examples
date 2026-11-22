import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSendAnnouncementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessSendAnnouncementHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSendAnnouncementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
