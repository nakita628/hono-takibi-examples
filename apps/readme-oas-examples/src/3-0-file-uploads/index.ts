import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingImagePngRoute,
  postAnythingMultipartFormdataRoute,
  putAnythingMultipartFormdataRoute,
} from './routes'
import {
  postAnythingImagePngRouteHandler,
  postAnythingMultipartFormdataRouteHandler,
  putAnythingMultipartFormdataRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnythingImagePngRoute, postAnythingImagePngRouteHandler)
  .openapi(postAnythingMultipartFormdataRoute, postAnythingMultipartFormdataRouteHandler)
  .openapi(putAnythingMultipartFormdataRoute, putAnythingMultipartFormdataRouteHandler)

export default app
