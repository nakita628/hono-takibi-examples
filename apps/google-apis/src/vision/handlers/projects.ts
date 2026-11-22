import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1p1beta1ParentFilesAnnotateRoute,
  postV1p1beta1ParentFilesAsyncBatchAnnotateRoute,
  postV1p1beta1ParentImagesAnnotateRoute,
  postV1p1beta1ParentImagesAsyncBatchAnnotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1p1beta1ParentFilesAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1ParentFilesAsyncBatchAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1ParentImagesAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1ParentImagesAsyncBatchAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
