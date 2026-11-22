import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountHandler,
  XAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainHandler,
  XAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountHandler,
  XAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityHandler,
  XAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityHandler,
  XAmzTargetRoute53DomainsV20140515DeleteDomainHandler,
  XAmzTargetRoute53DomainsV20140515DeleteTagsForDomainHandler,
  XAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewHandler,
  XAmzTargetRoute53DomainsV20140515DisableDomainTransferLockHandler,
  XAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainHandler,
  XAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewHandler,
  XAmzTargetRoute53DomainsV20140515EnableDomainTransferLockHandler,
  XAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusHandler,
  XAmzTargetRoute53DomainsV20140515GetDomainDetailHandler,
  XAmzTargetRoute53DomainsV20140515GetDomainSuggestionsHandler,
  XAmzTargetRoute53DomainsV20140515GetOperationDetailHandler,
  XAmzTargetRoute53DomainsV20140515ListDomainsHandler,
  XAmzTargetRoute53DomainsV20140515ListOperationsHandler,
  XAmzTargetRoute53DomainsV20140515ListPricesHandler,
  XAmzTargetRoute53DomainsV20140515ListTagsForDomainHandler,
  XAmzTargetRoute53DomainsV20140515PushDomainHandler,
  XAmzTargetRoute53DomainsV20140515RegisterDomainHandler,
  XAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountHandler,
  XAmzTargetRoute53DomainsV20140515RenewDomainHandler,
  XAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailHandler,
  XAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationHandler,
  XAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeHandler,
  XAmzTargetRoute53DomainsV20140515TransferDomainHandler,
  XAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountHandler,
  XAmzTargetRoute53DomainsV20140515UpdateDomainContactHandler,
  XAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyHandler,
  XAmzTargetRoute53DomainsV20140515UpdateDomainNameserversHandler,
  XAmzTargetRoute53DomainsV20140515UpdateTagsForDomainHandler,
  XAmzTargetRoute53DomainsV20140515ViewBillingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515DeleteDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515DeleteTagsForDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515DisableDomainTransferLockHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515EnableDomainTransferLockHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515GetDomainDetailHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515GetDomainSuggestionsHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515GetOperationDetailHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ListDomainsHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ListOperationsHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ListPricesHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ListTagsForDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515PushDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515RegisterDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515RenewDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515TransferDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515UpdateDomainContactHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515UpdateDomainNameserversHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515UpdateTagsForDomainHandler)
  .route('/', XAmzTargetRoute53DomainsV20140515ViewBillingHandler)

export default app
