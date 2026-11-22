import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicensesIdRoute,
  getLicensesIdRoute,
  getProjectsIdLicensesRoute,
  postProjectsIdLicensesRoute,
  putLicensesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app
  .openapi(deleteLicensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLicensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
