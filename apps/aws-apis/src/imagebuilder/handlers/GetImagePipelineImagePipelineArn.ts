import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImagePipelineImagePipelineArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetImagePipelineImagePipelineArnHandler = app.openapi(
  getGetImagePipelineImagePipelineArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
