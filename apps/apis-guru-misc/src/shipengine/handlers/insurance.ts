import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectionsInsuranceShipsuranceRoute,
  getV1InsuranceShipsuranceBalanceRoute,
  patchV1InsuranceShipsuranceAddFundsRoute,
  postV1ConnectionsInsuranceShipsuranceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insuranceHandler = app
  .openapi(deleteV1ConnectionsInsuranceShipsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsInsuranceShipsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1InsuranceShipsuranceAddFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InsuranceShipsuranceBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
