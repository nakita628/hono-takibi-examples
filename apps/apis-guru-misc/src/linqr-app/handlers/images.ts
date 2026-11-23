import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteImagesIdRoute, getImagesIdRoute, getImagesRoute, postImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
