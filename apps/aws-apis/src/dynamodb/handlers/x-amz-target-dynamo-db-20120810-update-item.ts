import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateItemRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810UpdateItemHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateItemRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
