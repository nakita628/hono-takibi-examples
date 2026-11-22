import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportsExportIdDownloadRoute,
  getExportsExportIdRoute,
  postExportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsExportIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
