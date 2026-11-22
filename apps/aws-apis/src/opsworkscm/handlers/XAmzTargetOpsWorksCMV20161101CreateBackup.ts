import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101CreateBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101CreateBackupHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101CreateBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
