import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4UploadsTokenRoute,
  postV4UploadsTokenRoute,
  putV4UploadsTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(deleteV4UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UploadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
