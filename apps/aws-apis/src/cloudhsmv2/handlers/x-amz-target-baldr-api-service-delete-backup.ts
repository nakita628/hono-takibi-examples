import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceDeleteBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetBaldrApiServiceDeleteBackupHandler = app.openapi(
  postXAmzTargetBaldrApiServiceDeleteBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
