import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceRestoreBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceRestoreBackupHandler = app.openapi(
  postXAmzTargetBaldrApiServiceRestoreBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
