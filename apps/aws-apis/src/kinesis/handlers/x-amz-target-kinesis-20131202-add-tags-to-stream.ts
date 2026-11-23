import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202AddTagsToStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202AddTagsToStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202AddTagsToStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
