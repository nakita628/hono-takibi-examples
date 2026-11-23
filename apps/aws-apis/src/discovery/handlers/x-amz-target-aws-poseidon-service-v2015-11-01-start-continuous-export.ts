import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101StartContinuousExportHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
