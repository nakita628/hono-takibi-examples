import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAdminAdminAccountIdRoute } from '../routes'

const app = new OpenAPIHono()

export const adminAdminAccountIdHandler = app.openapi(deleteAdminAdminAccountIdRoute, (c) => {
  throw new Error('Not implemented')
})
