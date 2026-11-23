import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionConnectionIdRoute,
  getConnectionConnectionIdRoute,
  getConnectionRoute,
  patchConnectionConnectionIdMetadataRoute,
  patchConnectionMetadataRoute,
  postConnectionConnectionIdMetadataRoute,
  postConnectionMetadataRoute,
  postConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionHandler = app
  .openapi(getConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectionConnectionIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConnectionConnectionIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
