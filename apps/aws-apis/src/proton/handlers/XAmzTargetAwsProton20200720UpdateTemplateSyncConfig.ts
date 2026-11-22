import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateTemplateSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UpdateTemplateSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateTemplateSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
