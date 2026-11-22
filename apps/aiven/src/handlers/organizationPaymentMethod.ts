import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodBankTransfersRoute,
  getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodCreditCardsRoute,
  getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodIdRoute,
  getOrganizationOrganizationIdPaymentMethodCustomRoute,
  getOrganizationOrganizationIdPaymentMethodsRoute,
  postOrganizationOrganizationIdPaymentMethodCreditCardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationPaymentMethodHandler = app
  .openapi(getOrganizationOrganizationIdPaymentMethodBankTransferPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdPaymentMethodCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCreditCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCreditCardPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCustomPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
