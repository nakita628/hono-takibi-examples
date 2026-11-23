import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImagesFilenameRoute,
  getImagesFilenameRoute,
  putImagesFilenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImagesFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImagesFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
