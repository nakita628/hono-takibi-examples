import { OpenAPIHono } from '@hono/zod-openapi'
import { putStartImagePipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const startImagePipelineExecutionHandler = app.openapi(
  putStartImagePipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
