import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101StopContinuousExportHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
