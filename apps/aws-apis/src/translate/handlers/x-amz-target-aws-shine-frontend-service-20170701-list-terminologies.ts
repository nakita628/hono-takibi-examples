import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShineFrontendService20170701ListTerminologiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShineFrontendService20170701ListTerminologiesHandler = app.openapi(
  postXAmzTargetAWSShineFrontendService20170701ListTerminologiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
