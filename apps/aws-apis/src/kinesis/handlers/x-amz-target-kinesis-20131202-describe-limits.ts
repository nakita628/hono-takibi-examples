import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DescribeLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202DescribeLimitsHandler = app.openapi(
  postXAmzTargetKinesis20131202DescribeLimitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
