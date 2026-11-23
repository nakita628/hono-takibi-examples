import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101DescribeTagsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
