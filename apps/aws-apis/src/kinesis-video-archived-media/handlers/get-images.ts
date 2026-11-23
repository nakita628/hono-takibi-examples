import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const getImagesHandler = app.openapi(postGetImagesRoute, (c) => {
  throw new Error('Not implemented')
})
