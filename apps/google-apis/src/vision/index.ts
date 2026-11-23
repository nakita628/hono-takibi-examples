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
} from './routes'
import {
  postV1p1beta1FilesAnnotateRouteHandler,
  postV1p1beta1FilesAsyncBatchAnnotateRouteHandler,
  postV1p1beta1ImagesAnnotateRouteHandler,
  postV1p1beta1ImagesAsyncBatchAnnotateRouteHandler,
  postV1p1beta1ParentFilesAnnotateRouteHandler,
  postV1p1beta1ParentFilesAsyncBatchAnnotateRouteHandler,
  postV1p1beta1ParentImagesAnnotateRouteHandler,
  postV1p1beta1ParentImagesAsyncBatchAnnotateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1p1beta1FilesAnnotateRoute, postV1p1beta1FilesAnnotateRouteHandler)
  .openapi(
    postV1p1beta1FilesAsyncBatchAnnotateRoute,
    postV1p1beta1FilesAsyncBatchAnnotateRouteHandler,
  )
  .openapi(postV1p1beta1ImagesAnnotateRoute, postV1p1beta1ImagesAnnotateRouteHandler)
  .openapi(
    postV1p1beta1ImagesAsyncBatchAnnotateRoute,
    postV1p1beta1ImagesAsyncBatchAnnotateRouteHandler,
  )
  .openapi(postV1p1beta1ParentFilesAnnotateRoute, postV1p1beta1ParentFilesAnnotateRouteHandler)
  .openapi(
    postV1p1beta1ParentFilesAsyncBatchAnnotateRoute,
    postV1p1beta1ParentFilesAsyncBatchAnnotateRouteHandler,
  )
  .openapi(postV1p1beta1ParentImagesAnnotateRoute, postV1p1beta1ParentImagesAnnotateRouteHandler)
  .openapi(
    postV1p1beta1ParentImagesAsyncBatchAnnotateRoute,
    postV1p1beta1ParentImagesAsyncBatchAnnotateRouteHandler,
  )

export default app
