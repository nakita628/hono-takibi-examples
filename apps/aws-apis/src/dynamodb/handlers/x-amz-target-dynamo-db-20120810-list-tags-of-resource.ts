import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810ListTagsOfResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810ListTagsOfResourceHandler = app.openapi(
  postXAmzTargetDynamoDB20120810ListTagsOfResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
