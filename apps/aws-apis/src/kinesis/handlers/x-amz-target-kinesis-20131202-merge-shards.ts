import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202MergeShardsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202MergeShardsHandler = app.openapi(
  postXAmzTargetKinesis20131202MergeShardsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
