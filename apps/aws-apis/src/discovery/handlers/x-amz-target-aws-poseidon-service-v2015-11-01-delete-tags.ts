import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101DeleteTagsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DeleteTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
