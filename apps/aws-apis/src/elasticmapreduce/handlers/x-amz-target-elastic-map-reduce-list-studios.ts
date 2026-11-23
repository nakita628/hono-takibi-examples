import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListStudiosRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListStudiosHandler = app.openapi(
  postXAmzTargetElasticMapReduceListStudiosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
