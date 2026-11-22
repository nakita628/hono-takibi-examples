import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskHandler = app.openapi(
  postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
