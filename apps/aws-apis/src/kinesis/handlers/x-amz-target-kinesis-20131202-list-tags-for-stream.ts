import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202ListTagsForStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202ListTagsForStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202ListTagsForStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
