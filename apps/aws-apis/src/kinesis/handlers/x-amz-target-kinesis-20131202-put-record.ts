import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202PutRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202PutRecordHandler = app.openapi(
  postXAmzTargetKinesis20131202PutRecordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
