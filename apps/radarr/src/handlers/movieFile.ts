import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3MoviefileBulkRoute,
  deleteApiV3MoviefileIdRoute,
  getApiV3MoviefileIdRoute,
  getApiV3MoviefileRoute,
  putApiV3MoviefileBulkRoute,
  putApiV3MoviefileEditorRoute,
  putApiV3MoviefileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const movieFileHandler = app
  .openapi(getApiV3MoviefileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3MoviefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3MoviefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MoviefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3MoviefileEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3MoviefileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3MoviefileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
