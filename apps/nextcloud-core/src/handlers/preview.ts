import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpCoreMimeiconRoute,
  getIndexPhpCorePreviewPngRoute,
  getIndexPhpCorePreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const previewHandler = app
  .openapi(getIndexPhpCorePreviewPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCorePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCoreMimeiconRoute, (c) => {
    throw new Error('Not implemented')
  })
