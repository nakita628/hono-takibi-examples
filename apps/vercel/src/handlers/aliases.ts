import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAliasesIdProtectionBypassRoute } from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app.openapi(patchAliasesIdProtectionBypassRoute, (c) => {
  throw new Error('Not implemented')
})
