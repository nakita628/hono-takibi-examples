import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdDatafeedstatusesDatafeedIdRoute,
  getMerchantIdDatafeedstatusesRoute,
  postDatafeedstatusesBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datafeedstatusesHandler = app
  .openapi(postDatafeedstatusesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedstatusesDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
