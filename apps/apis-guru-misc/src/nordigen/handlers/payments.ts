import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PaymentsCreditorsIdIndexRoute,
  deleteApiV2PaymentsIdIndexRoute,
  getApiV2PaymentsAccountIndexRoute,
  getApiV2PaymentsCreditorsIdIndexRoute,
  getApiV2PaymentsCreditorsIndexRoute,
  getApiV2PaymentsFieldsInstitutionIdIndexRoute,
  getApiV2PaymentsIdIndexRoute,
  getApiV2PaymentsIndexRoute,
  postApiV2PaymentsCreditorsIndexRoute,
  postApiV2PaymentsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getApiV2PaymentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PaymentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsCreditorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PaymentsCreditorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PaymentsCreditorsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsCreditorsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsFieldsInstitutionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PaymentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PaymentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
