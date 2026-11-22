import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FilesFileKeyDevResourcesDevResourceIdRoute,
  getV1FilesFileKeyDevResourcesRoute,
  postV1DevResourcesRoute,
  putV1DevResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devResourcesHandler = app
  .openapi(getV1FilesFileKeyDevResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DevResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FilesFileKeyDevResourcesDevResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
