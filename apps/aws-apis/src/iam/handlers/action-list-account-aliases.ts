import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListAccountAliasesRoute, postActionListAccountAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListAccountAliasesHandler = app
  .openapi(getActionListAccountAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAccountAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
