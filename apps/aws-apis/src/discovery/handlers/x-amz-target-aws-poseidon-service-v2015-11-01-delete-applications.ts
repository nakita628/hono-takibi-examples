import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101DeleteApplicationsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
