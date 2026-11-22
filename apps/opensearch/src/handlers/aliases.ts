import { OpenAPIHono } from '@hono/zod-openapi'
import { postAliasesNameRoute, postAliasesRoute, putAliasesNameRoute } from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(postAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
