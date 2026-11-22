import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdAccountstatusesAccountIdRoute,
  getMerchantIdAccountstatusesRoute,
  postAccountstatusesBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountstatusesHandler = app
  .openapi(postAccountstatusesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountstatusesAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
