import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteTemplateSyncConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteTemplateSyncConfigHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteTemplateSyncConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
