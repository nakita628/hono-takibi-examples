import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdUsersRoute,
  getCompaniesCompanyIdUsersUserIdRoute,
  patchCompaniesCompanyIdUsersUserIdRoute,
  postCompaniesCompanyIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const users__companyLevelHandler = app
  .openapi(getCompaniesCompanyIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
