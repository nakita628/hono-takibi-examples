import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AclkRoute,
  getApiV1DbengineStatsRoute,
  getApiV1ManageHealthRoute,
  getApiV1MlInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managementHandler = app
  .openapi(getApiV1ManageHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AclkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DbengineStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MlInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
