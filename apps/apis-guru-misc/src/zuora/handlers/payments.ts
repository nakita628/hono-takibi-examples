import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectPaymentIdRoute,
  deleteV1PaymentsPaymentIdRoute,
  getV1ObjectPaymentIdRoute,
  getV1PaymentsPaymentIdPartsPartidItempartsItempartidRoute,
  getV1PaymentsPaymentIdPartsPartidItempartsRoute,
  getV1PaymentsPaymentIdPartsPartidRoute,
  getV1PaymentsPaymentIdPartsRoute,
  getV1PaymentsPaymentIdRoute,
  getV1PaymentsRoute,
  postV1ObjectPaymentRoute,
  postV1PaymentsPaymentIdRefundsRoute,
  postV1PaymentsRoute,
  putV1ObjectPaymentIdRoute,
  putV1PaymentsPaymentIdApplyRoute,
  putV1PaymentsPaymentIdCancelRoute,
  putV1PaymentsPaymentIdRoute,
  putV1PaymentsPaymentIdTransferRoute,
  putV1PaymentsPaymentIdUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postV1ObjectPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsPartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsPartidItempartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentIdPartsPartidItempartsItempartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentsPaymentIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentsPaymentIdUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
