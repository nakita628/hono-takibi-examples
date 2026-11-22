import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ImportRoute, postApiV1PreimportRoute } from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(postApiV1PreimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportRoute, (c) => {
    throw new Error('Not implemented')
  })
