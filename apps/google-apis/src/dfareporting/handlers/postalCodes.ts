import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdPostalCodesCodeRoute,
  getUserprofilesProfileIdPostalCodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postalCodesHandler = app
  .openapi(getUserprofilesProfileIdPostalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdPostalCodesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
