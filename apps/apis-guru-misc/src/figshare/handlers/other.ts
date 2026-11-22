import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountLicensesRoute,
  getAccountRoute,
  getCategoriesRoute,
  getFileDownloadFileIdRoute,
  getItemTypesRoute,
  getLicensesRoute,
  postAccountFundingSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountFundingSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileDownloadFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
