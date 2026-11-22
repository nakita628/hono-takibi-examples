import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelinePollForTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelinePollForTaskHandler = app.openapi(
  postXAmzTargetDataPipelinePollForTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
