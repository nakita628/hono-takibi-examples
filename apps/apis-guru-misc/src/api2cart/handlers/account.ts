import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountCartListJsonRoute,
  getAccountFailedWebhooksJsonRoute,
  getAccountSupportedPlatformsJsonRoute,
  postAccountCartAddJsonRoute,
  putAccountConfigUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountCartAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountCartListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountConfigUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountFailedWebhooksJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSupportedPlatformsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
