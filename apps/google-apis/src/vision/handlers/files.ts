import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1p1beta1FilesAnnotateRoute,
  postV1p1beta1FilesAsyncBatchAnnotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(postV1p1beta1FilesAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1p1beta1FilesAsyncBatchAnnotateRoute, (c) => {
    throw new Error('Not implemented')
  })
