import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101StartReplicationTaskAssessmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
