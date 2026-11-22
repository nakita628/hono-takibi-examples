import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImageJpegRoute,
  getImagePngRoute,
  getImageRoute,
  getImageSvgRoute,
  getImageWebpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImageJpegRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagePngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImageSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImageWebpRoute, (c) => {
    throw new Error('Not implemented')
  })
