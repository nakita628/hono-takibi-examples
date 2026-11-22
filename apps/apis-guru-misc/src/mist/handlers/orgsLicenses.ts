import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdLicensesRoute,
  getApiV1OrgsOrgIdLicensesUsagesRoute,
  putApiV1OrgsOrgIdLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsLicensesHandler = app
  .openapi(getApiV1OrgsOrgIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdLicensesUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
