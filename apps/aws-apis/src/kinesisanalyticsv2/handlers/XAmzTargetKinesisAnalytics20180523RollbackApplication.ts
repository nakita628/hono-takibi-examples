import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523RollbackApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523RollbackApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523RollbackApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
