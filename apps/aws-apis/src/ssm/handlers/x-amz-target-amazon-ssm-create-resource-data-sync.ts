import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreateResourceDataSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreateResourceDataSyncHandler = app.openapi(
  postXAmzTargetAmazonSSMCreateResourceDataSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
