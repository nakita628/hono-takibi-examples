import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdPubsubnotificationsettingsRoute,
  putMerchantIdPubsubnotificationsettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pubsubnotificationsettingsHandler = app
  .openapi(getMerchantIdPubsubnotificationsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdPubsubnotificationsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
