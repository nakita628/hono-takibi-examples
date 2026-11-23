import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101CreateTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101CreateTagsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101CreateTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
