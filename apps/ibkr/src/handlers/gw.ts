import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1AccountsAccountIdDetailsRoute,
  getGwApiV1AccountsAccountIdKycRoute,
  getGwApiV1AccountsAccountIdLoginMessagesRoute,
  getGwApiV1AccountsAccountIdStatusRoute,
  getGwApiV1AccountsAccountIdTasksRoute,
  getGwApiV1AccountsLoginMessagesRoute,
  getGwApiV1AccountsRoute,
  getGwApiV1AccountsStatusRoute,
  getGwApiV1ClientInstructionsClientInstructionIdRoute,
  getGwApiV1EchoHttpsRoute,
  getGwApiV1EnumerationsComplexAssetTransferRoute,
  getGwApiV1EnumerationsEnumerationTypeRoute,
  getGwApiV1FormsRequiredFormsRoute,
  getGwApiV1FormsRoute,
  getGwApiV1InstructionSetsInstructionSetIdRoute,
  getGwApiV1InstructionsInstructionIdRoute,
  getGwApiV1ParticipatingBanksRoute,
  getGwApiV1RequestsRequestIdStatusRoute,
  getGwApiV1RequestsRoute,
  getGwApiV1RestrictionsAccountRoute,
  getGwApiV1RestrictionsIdsRoute,
  getGwApiV1RestrictionsListRoute,
  getGwApiV1RestrictionsListsIdsRoute,
  getGwApiV1RestrictionsRestrictionRoute,
  getGwApiV1RestrictionsRestrictionScopeRoute,
  getGwApiV1RestrictionsUserRoute,
  getGwApiV1StatementsAvailableRoute,
  getGwApiV1TaxDocumentsAvailableRoute,
  getGwApiV1TaxVouchersActiveCountriesRoute,
  getGwApiV1TaxVouchersDividendsRoute,
  getGwApiV1TaxVouchersRequestIdDownloadRoute,
  getGwApiV1TaxVouchersRequestIdStateRoute,
  getGwApiV1TaxVouchersYearsRoute,
  getGwApiV1TradeConfirmationsAvailableRoute,
  getGwApiV1ValidationsUsernamesUsernameRoute,
  patchGwApiV1AccountsAccountIdStatusRoute,
  patchGwApiV1AccountsAccountIdTasksRoute,
  patchGwApiV1AccountsRoute,
  patchGwApiV1RequestsRequestIdStatusRoute,
  postGwApiV1AccountsAccountIdTasksRoute,
  postGwApiV1AccountsDocumentsRoute,
  postGwApiV1AccountsRoute,
  postGwApiV1BalancesQueryRoute,
  postGwApiV1BankInstructionsBulkRoute,
  postGwApiV1BankInstructionsQueryRoute,
  postGwApiV1BankInstructionsRoute,
  postGwApiV1EchoSignedJwtRoute,
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
  postGwApiV1RestrictionsRoute,
  postGwApiV1RestrictionsVerifyRoute,
  postGwApiV1SsoBrowserSessionsRoute,
  postGwApiV1SsoSessionsRoute,
  postGwApiV1StatementsRoute,
  postGwApiV1TaxDocumentsRoute,
  postGwApiV1TaxVouchersRoute,
  postGwApiV1TradeConfirmationsRoute,
  postGwApiV2ExternalAssetTransfersBulkRoute,
  postGwApiV2ExternalAssetTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gwHandler = app
  .openapi(postGwApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1AccountsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1AccountsAccountIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1AccountsAccountIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1BalancesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1BankInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1BankInstructionsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1BankInstructionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1EchoSignedJwtRoute, (c) => {
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
  .openapi(postGwApiV1RestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1RestrictionsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1SsoBrowserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1SsoSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1StatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1TaxDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1TaxVouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1TradeConfirmationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV2ExternalAssetTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV2ExternalAssetTransfersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1AccountsAccountIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1RequestsRequestIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RequestsRequestIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsLoginMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdKycRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdLoginMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1ClientInstructionsClientInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1EchoHttpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1EnumerationsComplexAssetTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1EnumerationsEnumerationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1FormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1FormsRequiredFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1InstructionSetsInstructionSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1InstructionsInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1ParticipatingBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsListsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsRestrictionScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1StatementsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxDocumentsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersActiveCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersDividendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersRequestIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TaxVouchersRequestIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1TradeConfirmationsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1ValidationsUsernamesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
