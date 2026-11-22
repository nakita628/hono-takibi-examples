import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CancelReplicationTaskAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
