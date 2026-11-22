import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdFreelistingsprogramRoute,
  postMerchantIdFreelistingsprogramRequestreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const freelistingsprogramHandler = app
  .openapi(getMerchantIdFreelistingsprogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdFreelistingsprogramRequestreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
