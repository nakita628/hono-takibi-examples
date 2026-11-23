import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceModifyBackupAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceModifyBackupAttributesHandler = app.openapi(
  postXAmzTargetBaldrApiServiceModifyBackupAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
