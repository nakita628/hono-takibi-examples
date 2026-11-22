import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PreferenceCenterRoute,
  putV1PreferenceCenterResetRoute,
  putV1PreferenceCenterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preferenceCenterHandler = app
  .openapi(getV1PreferenceCenterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PreferenceCenterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PreferenceCenterResetRoute, (c) => {
    throw new Error('Not implemented')
  })
