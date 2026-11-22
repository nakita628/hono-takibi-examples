import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
