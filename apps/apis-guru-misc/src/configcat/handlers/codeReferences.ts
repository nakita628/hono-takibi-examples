import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CodeReferencesDeleteReportsRoute, postV1CodeReferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const codeReferencesHandler = app
  .openapi(postV1CodeReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CodeReferencesDeleteReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
