import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceAddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceAddTagsHandler = app.openapi(
  postXAmzTargetElasticMapReduceAddTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
