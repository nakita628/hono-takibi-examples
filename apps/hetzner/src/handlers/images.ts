import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteImagesIdRoute, getImagesIdRoute, getImagesRoute, putImagesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
