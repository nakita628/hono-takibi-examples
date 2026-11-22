import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdProductdeliverytimeProductIdRoute,
  getMerchantIdProductdeliverytimeProductIdRoute,
  postMerchantIdProductdeliverytimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productdeliverytimeHandler = app
  .openapi(postMerchantIdProductdeliverytimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdProductdeliverytimeProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductdeliverytimeProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
