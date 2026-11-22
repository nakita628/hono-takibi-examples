import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImagesHandler = app.openapi(postListImagesRoute, (c) => {
  throw new Error('Not implemented')
})
