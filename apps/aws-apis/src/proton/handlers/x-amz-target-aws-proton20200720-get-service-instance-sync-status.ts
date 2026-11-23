import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetServiceInstanceSyncStatusHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
