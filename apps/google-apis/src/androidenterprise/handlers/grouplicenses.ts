import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const grouplicensesHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
