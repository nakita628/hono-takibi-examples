import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const noteAttachmentHandler = app
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
