import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1ClientInstructionsClientInstructionIdRoute,
  getGwApiV1InstructionSetsInstructionSetIdRoute,
  getGwApiV1InstructionsInstructionIdRoute,
  postGwApiV1BankInstructionsBulkRoute,
  postGwApiV1BankInstructionsQueryRoute,
  postGwApiV1BankInstructionsRoute,
  postGwApiV1ExternalAssetTransfersBulkRoute,
  postGwApiV1ExternalAssetTransfersRoute,
  postGwApiV1ExternalCashTransfersBulkRoute,
  postGwApiV1ExternalCashTransfersQueryRoute,
  postGwApiV1ExternalCashTransfersRoute,
  postGwApiV1InstructionsCancelBulkRoute,
  postGwApiV1InstructionsCancelRoute,
  postGwApiV1InstructionsQueryRoute,
  postGwApiV1InternalAssetTransfersBulkRoute,
  postGwApiV1InternalAssetTransfersRoute,
  postGwApiV1InternalCashTransfersBulkRoute,
  postGwApiV1InternalCashTransfersRoute,
  postGwApiV2ExternalAssetTransfersBulkRoute,
  postGwApiV2ExternalAssetTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountManagementBankingHandler = app
  .openapi(postGwApiV1BankInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1BankInstructionsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1BankInstructionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1ExternalAssetTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1ExternalAssetTransfersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1ExternalCashTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1ExternalCashTransfersQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1ExternalCashTransfersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InstructionsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InstructionsCancelBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InstructionsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InternalAssetTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InternalAssetTransfersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InternalCashTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1InternalCashTransfersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV2ExternalAssetTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV2ExternalAssetTransfersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1ClientInstructionsClientInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1InstructionSetsInstructionSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1InstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
