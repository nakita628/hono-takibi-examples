import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const listImagesHandler = app.openapi(postListImagesRoute, (c) => {
  throw new Error('Not implemented')
})
