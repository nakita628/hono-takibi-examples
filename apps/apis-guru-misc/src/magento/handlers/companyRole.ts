import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CompanyRoleIndexRoute, postV1CompanyRoleIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const companyRoleHandler = app
  .openapi(getV1CompanyRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompanyRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
