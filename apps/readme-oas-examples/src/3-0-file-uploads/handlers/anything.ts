import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAnythingImagePngRoute,
  postAnythingMultipartFormdataRoute,
  putAnythingMultipartFormdataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(postAnythingImagePngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingMultipartFormdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingMultipartFormdataRoute, (c) => {
    throw new Error('Not implemented')
  })
