import { OpenAPIHono } from '@hono/zod-openapi'
import { getImportsIdRoute, getImportsRoute, postImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(getImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
