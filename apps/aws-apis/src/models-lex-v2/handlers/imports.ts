import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImportsImportIdIndexRoute,
  getImportsImportIdIndexRoute,
  postImportsIndexRoute,
  putImportsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(deleteImportsImportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsImportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
