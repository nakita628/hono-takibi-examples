import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImagePipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const listImagePipelinesHandler = app.openapi(postListImagePipelinesRoute, (c) => {
  throw new Error('Not implemented')
})
