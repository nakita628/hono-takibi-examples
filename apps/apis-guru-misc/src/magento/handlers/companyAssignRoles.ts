import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CompanyAssignRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const companyAssignRolesHandler = app.openapi(putV1CompanyAssignRolesRoute, (c) => {
  throw new Error('Not implemented')
})
