import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202RemoveTagsFromStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202RemoveTagsFromStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202RemoveTagsFromStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
