import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1OrgsOrgId128routersRegisterCmdRoute } from '../routes'

const app = new OpenAPIHono()

export const orgs128THandler = app.openapi(getApiV1OrgsOrgId128routersRegisterCmdRoute, (c) => {
  throw new Error('Not implemented')
})
