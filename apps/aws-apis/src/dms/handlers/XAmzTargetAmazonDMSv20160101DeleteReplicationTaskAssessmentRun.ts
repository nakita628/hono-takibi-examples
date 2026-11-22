import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteReplicationTaskAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
