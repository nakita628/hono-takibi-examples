import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateImagePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const createImagePipelineHandler = app.openapi(putCreateImagePipelineRoute, (c) => {
  throw new Error('Not implemented')
})
