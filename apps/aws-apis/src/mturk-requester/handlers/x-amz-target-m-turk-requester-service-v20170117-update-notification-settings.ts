import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsHandler =
  app.openapi(postXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
