import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceCopyBackupToRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceCopyBackupToRegionHandler = app.openapi(
  postXAmzTargetBaldrApiServiceCopyBackupToRegionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
