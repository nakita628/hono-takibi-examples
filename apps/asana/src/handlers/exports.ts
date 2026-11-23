import { OpenAPIHono } from '@hono/zod-openapi'
import { postExportsGraphRoute, postExportsResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(postExportsGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportsResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
