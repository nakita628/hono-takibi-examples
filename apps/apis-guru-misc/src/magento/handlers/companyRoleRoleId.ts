import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CompanyRoleRoleIdRoute, getV1CompanyRoleRoleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const companyRoleRoleIdHandler = app
  .openapi(deleteV1CompanyRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
