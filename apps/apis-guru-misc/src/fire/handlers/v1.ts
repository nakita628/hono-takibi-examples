import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BatchesBatchUuidBanktransfersItemUuidRoute,
  deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute,
  deleteV1BatchesBatchUuidRoute,
  getV1AccountsIcanRoute,
  getV1AccountsIcanTransactionsFilterRoute,
  getV1AccountsIcanTransactionsRoute,
  getV1AccountsRoute,
  getV1AspspsRoute,
  getV1BatchesBatchUuidApprovalsRoute,
  getV1BatchesBatchUuidBanktransfersRoute,
  getV1BatchesBatchUuidInternaltransfersRoute,
  getV1BatchesBatchUuidRoute,
  getV1BatchesRoute,
  getV1CardsCardIdTransactionsRoute,
  getV1CardsRoute,
  getV1DirectdebitsDirectDebitUuidRoute,
  getV1DirectdebitsRoute,
  getV1MandatesMandateUuidRoute,
  getV1MandatesRoute,
  getV1PayeesRoute,
  getV1PaymentsPaymentUuidRoute,
  getV1UsersRoute,
  getV1UserUserIdRoute,
  postV1AccountsRoute,
  postV1AppsAccesstokensRoute,
  postV1AppsRoute,
  postV1BatchesBatchUuidBanktransfersRoute,
  postV1BatchesBatchUuidInternaltransfersRoute,
  postV1BatchesRoute,
  postV1CardsCardIdBlockRoute,
  postV1CardsCardIdUnblockRoute,
  postV1CardsRoute,
  postV1DirectdebitsDirectDebitUuidRejectRoute,
  postV1MandatesMandateUuidActivateRoute,
  postV1MandatesMandateUuidCancelRoute,
  postV1MandatesMandateUuidRoute,
  postV1PaymentrequestsRoute,
  putV1BatchesBatchUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsIcanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsIcanTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsIcanTransactionsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsAccesstokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AspspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BatchesBatchUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidBanktransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchUuidBanktransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchUuidBanktransfersItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidInternaltransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchUuidInternaltransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CardsCardIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CardsCardIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DirectdebitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DirectdebitsDirectDebitUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DirectdebitsDirectDebitUuidRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MandatesMandateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MandatesMandateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MandatesMandateUuidActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MandatesMandateUuidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentsPaymentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
