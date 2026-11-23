import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202GetRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202GetRecordsHandler = app.openapi(
  postXAmzTargetKinesis20131202GetRecordsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
