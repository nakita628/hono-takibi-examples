import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokensRoute,
  getPaymentSourcesCustPaymentSourceIdRoute,
  getPaymentSourcesRoute,
  postPaymentSourcesCreateBankAccountRoute,
  postPaymentSourcesCreateCardRoute,
  postPaymentSourcesCreateUsingPaymentIntentRoute,
  postPaymentSourcesCreateUsingPermanentTokenRoute,
  postPaymentSourcesCreateUsingTempTokenRoute,
  postPaymentSourcesCreateUsingTokenRoute,
  postPaymentSourcesCreateVoucherPaymentSourceRoute,
  postPaymentSourcesCustPaymentSourceIdDeleteLocalRoute,
  postPaymentSourcesCustPaymentSourceIdDeleteRoute,
  postPaymentSourcesCustPaymentSourceIdExportPaymentSourceRoute,
  postPaymentSourcesCustPaymentSourceIdSwitchGatewayAccountRoute,
  postPaymentSourcesCustPaymentSourceIdUpdateBankAccountRoute,
  postPaymentSourcesCustPaymentSourceIdUpdateCardRoute,
  postPaymentSourcesCustPaymentSourceIdVerifyBankAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentSourcesHandler = app
  .openapi(postPaymentSourcesCreateUsingPermanentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCreateCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdVerifyBankAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdExportPaymentSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCreateUsingPaymentIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentSourcesCustPaymentSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCreateVoucherPaymentSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCreateUsingTempTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdUpdateCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdSwitchGatewayAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCreateUsingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdDeleteLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCreateBankAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentSourcesCustPaymentSourceIdUpdateBankAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
