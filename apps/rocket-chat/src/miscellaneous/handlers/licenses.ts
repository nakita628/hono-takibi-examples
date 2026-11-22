import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LicensesInfoRoute,
  getApiV1LicensesMaxActiveUsersRoute,
  postApiV1LicensesAddRoute,
  postApiV1LicensesValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(getApiV1LicensesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LicensesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LicensesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LicensesMaxActiveUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
