import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdPersonsIdRoute,
  getAppsAppIdPersonsIdRestoreRoute,
  getAppsAppIdPersonsIdRoute,
  getAppsAppIdPersonsRoute,
  postAppsAppIdPersonsBatchRoute,
  postAppsAppIdPersonsIdRoute,
  postAppsAppIdPersonsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personsHandler = app
  .openapi(getAppsAppIdPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPersonsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPersonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPersonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPersonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPersonsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
