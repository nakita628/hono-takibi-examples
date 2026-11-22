import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
