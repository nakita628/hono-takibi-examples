import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportsExportIdRoute,
  getExportsRoute,
  postExportsBatchRoute,
  postExportsDeleteRoute,
  postExportsReassignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(getExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
