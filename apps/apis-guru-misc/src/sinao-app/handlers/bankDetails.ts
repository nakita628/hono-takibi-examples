import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdBankdetailsIdRoute,
  getAppsAppIdBankdetailsIdRoute,
  getAppsAppIdBankdetailsRoute,
  postAppsAppIdBankdetailsIdRoute,
  postAppsAppIdBankdetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankDetailsHandler = app
  .openapi(getAppsAppIdBankdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBankdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBankdetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBankdetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBankdetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
