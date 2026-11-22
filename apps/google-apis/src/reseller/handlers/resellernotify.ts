import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppsResellerV1ResellernotifyGetwatchdetailsRoute,
  postAppsResellerV1ResellernotifyRegisterRoute,
  postAppsResellerV1ResellernotifyUnregisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resellernotifyHandler = app
  .openapi(getAppsResellerV1ResellernotifyGetwatchdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsResellerV1ResellernotifyRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsResellerV1ResellernotifyUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
