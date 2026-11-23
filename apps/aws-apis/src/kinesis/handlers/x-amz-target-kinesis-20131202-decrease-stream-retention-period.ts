import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202DecreaseStreamRetentionPeriodHandler = app.openapi(
  postXAmzTargetKinesis20131202DecreaseStreamRetentionPeriodRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
