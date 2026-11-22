import { OpenAPIHono } from '@hono/zod-openapi'
import { getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const grouplicenseusersHandler = app.openapi(
  getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
