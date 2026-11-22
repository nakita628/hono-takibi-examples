import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
