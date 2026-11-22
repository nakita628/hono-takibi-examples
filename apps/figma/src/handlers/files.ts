import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1FilesFileKeyImagesRoute,
  getV1FilesFileKeyMetaRoute,
  getV1FilesFileKeyNodesRoute,
  getV1FilesFileKeyRoute,
  getV1FilesFileKeyVersionsRoute,
  getV1ImagesFileKeyRoute,
  postV1FilesFileKeyDuplicateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getV1FilesFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FilesFileKeyDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
