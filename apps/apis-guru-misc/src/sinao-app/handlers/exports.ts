import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdExportsIdRoute,
  getAppsAppIdExportsAcdComptaRoute,
  getAppsAppIdExportsDownloadRoute,
  getAppsAppIdExportsIdRoute,
  getAppsAppIdExportsMonthsRoute,
  getAppsAppIdExportsRoute,
  postAppsAppIdExportsAcdComptaRoute,
  postAppsAppIdExportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportsHandler = app
  .openapi(getAppsAppIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsAcdComptaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdExportsAcdComptaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsMonthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
