import { OpenAPIHono } from '@hono/zod-openapi'
import { getImagesIdRoute, getImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
