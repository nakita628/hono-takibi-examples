import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdAccountsIdRoute,
  getAppsAppIdAccountsIdRoute,
  getAppsAppIdAccountsIndexRoute,
  postAppsAppIdAccountsIdRoute,
  postAppsAppIdAccountsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAppsAppIdAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
