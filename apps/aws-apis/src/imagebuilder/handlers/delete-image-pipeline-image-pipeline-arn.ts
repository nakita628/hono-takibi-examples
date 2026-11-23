import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteImagePipelineImagePipelineArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteImagePipelineImagePipelineArnHandler = app.openapi(
  deleteDeleteImagePipelineImagePipelineArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
