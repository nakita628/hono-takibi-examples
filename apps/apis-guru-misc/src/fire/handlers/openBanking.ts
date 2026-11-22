import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AspspsRoute,
  getV1PaymentsPaymentUuidRoute,
  postV1PaymentrequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openBankingHandler = app
  .openapi(getV1AspspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
