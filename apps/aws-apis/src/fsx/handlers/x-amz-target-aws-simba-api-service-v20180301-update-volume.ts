import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301UpdateVolumeHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301UpdateVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
