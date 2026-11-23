import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExportsExportIdIndexRoute,
  getExportsExportIdIndexRoute,
  postExportsIndexRoute,
  putExportsExportIdIndexRoute,
  putExportsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(putExportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExportsExportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsExportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExportsExportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
