import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTransferAuthorizationCreateRoute,
  postTransferCancelRoute,
  postTransferCapabilitiesGetRoute,
  postTransferCreateRoute,
  postTransferEventListRoute,
  postTransferEventSyncRoute,
  postTransferGetRoute,
  postTransferIntentCreateRoute,
  postTransferIntentGetRoute,
  postTransferListRoute,
  postTransferMigrateAccountRoute,
  postTransferOriginatorCreateRoute,
  postTransferOriginatorGetRoute,
  postTransferOriginatorListRoute,
  postTransferQuestionnaireCreateRoute,
  postTransferRecurringCancelRoute,
  postTransferRecurringCreateRoute,
  postTransferRecurringGetRoute,
  postTransferRecurringListRoute,
  postTransferRefundCancelRoute,
  postTransferRefundCreateRoute,
  postTransferRefundGetRoute,
  postTransferRepaymentListRoute,
  postTransferRepaymentReturnListRoute,
  postTransferSweepGetRoute,
  postTransferSweepListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferHandler = app
  .openapi(postTransferAuthorizationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCapabilitiesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferEventListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferEventSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferIntentCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferIntentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferMigrateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferOriginatorListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferQuestionnaireCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRecurringListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRefundGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRepaymentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferRepaymentReturnListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferSweepGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransferSweepListRoute, (c) => {
    throw new Error('Not implemented')
  })
