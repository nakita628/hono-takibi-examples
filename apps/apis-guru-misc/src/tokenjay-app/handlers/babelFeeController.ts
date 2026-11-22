import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCancelbabelBoxIdRoute,
  getMosaikBabelfeeIndexRoute,
  getMosaikBabelfeeNotificationcheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const babelFeeControllerHandler = app
  .openapi(getCancelbabelBoxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikBabelfeeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikBabelfeeNotificationcheckRoute, (c) => {
    throw new Error('Not implemented')
  })
