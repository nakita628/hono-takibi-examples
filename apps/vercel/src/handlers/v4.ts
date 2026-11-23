import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4AliasesIdOrAliasRoute, getV4AliasesRoute, postV4SandboxesRoute } from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(postV4SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AliasesIdOrAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
