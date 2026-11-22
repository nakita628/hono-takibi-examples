import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServiceSyncBlockerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UpdateServiceSyncBlockerHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServiceSyncBlockerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
