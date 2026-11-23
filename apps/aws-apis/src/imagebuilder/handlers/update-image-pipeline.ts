import { OpenAPIHono } from '@hono/zod-openapi'
import { putUpdateImagePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const updateImagePipelineHandler = app.openapi(putUpdateImagePipelineRoute, (c) => {
  throw new Error('Not implemented')
})
