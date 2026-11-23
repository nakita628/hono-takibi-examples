import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocsHealthRoute, getDocsOpenapiJsonRoute, getDocsRoute } from '../routes'

const app = new OpenAPIHono()

export const docsHandler = app
  .openapi(getDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocsOpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocsHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
