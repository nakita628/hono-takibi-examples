import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationHandler = app.openapi(
  postXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
