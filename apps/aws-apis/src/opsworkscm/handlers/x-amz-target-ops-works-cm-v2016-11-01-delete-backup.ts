import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101DeleteBackupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorksCmV20161101DeleteBackupHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101DeleteBackupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
