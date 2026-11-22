import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301DeleteVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
