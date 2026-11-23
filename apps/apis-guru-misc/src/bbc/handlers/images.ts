import { OpenAPIHono } from '@hono/zod-openapi'
import { getImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app.openapi(getImagesRoute, (c) => {
  throw new Error('Not implemented')
})
