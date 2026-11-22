import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
