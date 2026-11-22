import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202PutRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202PutRecordHandler = app.openapi(
  postXAmzTargetKinesis20131202PutRecordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
