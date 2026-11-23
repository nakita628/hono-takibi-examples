import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720GetServiceSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
