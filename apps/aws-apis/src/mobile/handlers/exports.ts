import { OpenAPIHono } from '@hono/zod-openapi'
import { postExportsProjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app.openapi(postExportsProjectIdRoute, (c) => {
  throw new Error('Not implemented')
})
