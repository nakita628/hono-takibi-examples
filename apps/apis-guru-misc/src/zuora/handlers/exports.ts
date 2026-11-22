import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectExportIdRoute, postV1ObjectExportRoute } from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postV1ObjectExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
