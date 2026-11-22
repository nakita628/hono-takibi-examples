import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemIdRoute,
  deleteUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemIdRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const noteTextHandler = app
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDAdyenCardTransactionAdyenCardTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDOpenBankingMerchantTransactionOpenBankingMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentDelayedPaymentDelayedIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryBatchScheduleRequestInquiryBatchIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRequestInquiryScheduleRequestInquiryIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
