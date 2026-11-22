import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdCashflowsourcesIdRoute,
  getAppsAppIdCashflowsourcesIdRoute,
  getAppsAppIdCashflowsourcesIndexRoute,
  postAppsAppIdCashflowsourcesIdRoute,
  postAppsAppIdCashflowsourcesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getAppsAppIdCashflowsourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdCashflowsourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdCashflowsourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdCashflowsourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdCashflowsourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
