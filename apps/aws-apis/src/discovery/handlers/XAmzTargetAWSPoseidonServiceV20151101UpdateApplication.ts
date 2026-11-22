import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101UpdateApplicationHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
