import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateTemplateSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CreateTemplateSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateTemplateSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
