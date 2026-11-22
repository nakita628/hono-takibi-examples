import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CancelDataRepositoryTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
