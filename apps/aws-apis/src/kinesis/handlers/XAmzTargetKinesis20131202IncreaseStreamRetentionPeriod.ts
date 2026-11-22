import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202IncreaseStreamRetentionPeriodHandler = app.openapi(
  postXAmzTargetKinesis20131202IncreaseStreamRetentionPeriodRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
