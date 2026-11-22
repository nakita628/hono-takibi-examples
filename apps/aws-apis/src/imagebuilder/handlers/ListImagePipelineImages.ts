import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImagePipelineImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImagePipelineImagesHandler = app.openapi(postListImagePipelineImagesRoute, (c) => {
  throw new Error('Not implemented')
})
