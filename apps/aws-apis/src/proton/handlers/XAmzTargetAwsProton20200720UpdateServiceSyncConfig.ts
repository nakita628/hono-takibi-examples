import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServiceSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UpdateServiceSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServiceSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
