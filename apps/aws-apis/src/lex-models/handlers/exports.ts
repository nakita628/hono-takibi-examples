import { OpenAPIHono } from '@hono/zod-openapi'
import { getExportsNameVersionResourceTypeExportTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app.openapi(getExportsNameVersionResourceTypeExportTypeRoute, (c) => {
  throw new Error('Not implemented')
})
