import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1p1beta1FilesAnnotateRoute,
  postV1p1beta1FilesAsyncBatchAnnotateRoute,
  postV1p1beta1ImagesAnnotateRoute,
  postV1p1beta1ImagesAsyncBatchAnnotateRoute,
  postV1p1beta1ParentFilesAnnotateRoute,
  postV1p1beta1ParentFilesAsyncBatchAnnotateRoute,
  postV1p1beta1ParentImagesAnnotateRoute,
  postV1p1beta1ParentImagesAsyncBatchAnnotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1p1beta1Handler = app
  .openapi(postV1p1beta1FilesAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1FilesAsyncBatchAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1ImagesAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1ImagesAsyncBatchAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
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
