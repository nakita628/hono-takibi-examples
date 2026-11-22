import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4ExportsExportIdContentsRoute,
  getV4ExportsExportIdStatusRoute,
  postV4ExportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postV4ExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ExportsExportIdContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ExportsExportIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
