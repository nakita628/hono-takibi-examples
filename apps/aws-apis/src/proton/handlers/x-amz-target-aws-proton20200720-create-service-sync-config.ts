import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateServiceSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CreateServiceSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateServiceSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
