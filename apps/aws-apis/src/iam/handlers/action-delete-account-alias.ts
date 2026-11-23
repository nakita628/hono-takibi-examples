import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteAccountAliasRoute, postActionDeleteAccountAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteAccountAliasHandler = app
  .openapi(getActionDeleteAccountAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAccountAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
