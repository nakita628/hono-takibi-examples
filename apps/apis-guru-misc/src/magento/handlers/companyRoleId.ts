import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CompanyRoleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const companyRoleIdHandler = app.openapi(putV1CompanyRoleIdRoute, (c) => {
  throw new Error('Not implemented')
})
