import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  getPaymentInstrumentsIdNetworkTokenActivationDataRoute,
  getPaymentInstrumentsIdNetworkTokensRoute,
  getPaymentInstrumentsIdRevealRoute,
  getPaymentInstrumentsIdRoute,
  getPaymentInstrumentsIdTransactionRulesRoute,
  getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  patchPaymentInstrumentsIdRoute,
  patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  postPaymentInstrumentsIdNetworkTokenActivationDataRoute,
  postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  postPaymentInstrumentsRevealRoute,
  postPaymentInstrumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInstrumentsHandler = app
  .openapi(postPaymentInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInstrumentsRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentInstrumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentsIdNetworkTokenActivationDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInstrumentsIdNetworkTokenActivationDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentsIdNetworkTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentsIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentsIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
