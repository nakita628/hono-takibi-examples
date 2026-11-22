import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListAccountAliasesRoute, postActionListAccountAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListAccountAliasesHandler = app
  .openapi(getActionListAccountAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAccountAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
