import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdProductstatusesProductIdRepricingreportsRoute,
  getMerchantIdProductstatusesProductIdRoute,
  getMerchantIdProductstatusesRoute,
  postProductstatusesBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productstatusesHandler = app
  .openapi(postProductstatusesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesProductIdRepricingreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
