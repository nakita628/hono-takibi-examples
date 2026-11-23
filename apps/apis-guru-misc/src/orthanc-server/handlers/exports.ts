import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteExportsRoute, getExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(deleteExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
