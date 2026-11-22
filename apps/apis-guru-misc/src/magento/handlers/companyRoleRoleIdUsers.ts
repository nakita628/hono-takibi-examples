import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyRoleRoleIdUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const companyRoleRoleIdUsersHandler = app.openapi(getV1CompanyRoleRoleIdUsersRoute, (c) => {
  throw new Error('Not implemented')
})
