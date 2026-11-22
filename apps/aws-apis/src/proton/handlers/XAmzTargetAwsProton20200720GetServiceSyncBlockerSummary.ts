import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
