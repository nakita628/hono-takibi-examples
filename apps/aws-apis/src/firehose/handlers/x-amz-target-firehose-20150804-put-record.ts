import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFirehose20150804PutRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFirehose20150804PutRecordHandler = app.openapi(
  postXAmzTargetFirehose20150804PutRecordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
