import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateAccountAliasRoute, postActionCreateAccountAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateAccountAliasHandler = app
  .openapi(getActionCreateAccountAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateAccountAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
