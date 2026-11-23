import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101CreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101CreateApplicationHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101CreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
