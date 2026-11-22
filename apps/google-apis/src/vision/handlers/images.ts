import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1p1beta1ImagesAnnotateRoute,
  postV1p1beta1ImagesAsyncBatchAnnotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(postV1p1beta1ImagesAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1ImagesAsyncBatchAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
