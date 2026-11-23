import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountHandler,
  xAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainHandler,
  xAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountHandler,
  xAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityHandler,
  xAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityHandler,
  xAmzTargetRoute53DomainsV20140515DeleteDomainHandler,
  xAmzTargetRoute53DomainsV20140515DeleteTagsForDomainHandler,
  xAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewHandler,
  xAmzTargetRoute53DomainsV20140515DisableDomainTransferLockHandler,
  xAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainHandler,
  xAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewHandler,
  xAmzTargetRoute53DomainsV20140515EnableDomainTransferLockHandler,
  xAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusHandler,
  xAmzTargetRoute53DomainsV20140515GetDomainDetailHandler,
  xAmzTargetRoute53DomainsV20140515GetDomainSuggestionsHandler,
  xAmzTargetRoute53DomainsV20140515GetOperationDetailHandler,
  xAmzTargetRoute53DomainsV20140515ListDomainsHandler,
  xAmzTargetRoute53DomainsV20140515ListOperationsHandler,
  xAmzTargetRoute53DomainsV20140515ListPricesHandler,
  xAmzTargetRoute53DomainsV20140515ListTagsForDomainHandler,
  xAmzTargetRoute53DomainsV20140515PushDomainHandler,
  xAmzTargetRoute53DomainsV20140515RegisterDomainHandler,
  xAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountHandler,
  xAmzTargetRoute53DomainsV20140515RenewDomainHandler,
  xAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailHandler,
  xAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationHandler,
  xAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeHandler,
  xAmzTargetRoute53DomainsV20140515TransferDomainHandler,
  xAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountHandler,
  xAmzTargetRoute53DomainsV20140515UpdateDomainContactHandler,
  xAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyHandler,
  xAmzTargetRoute53DomainsV20140515UpdateDomainNameserversHandler,
  xAmzTargetRoute53DomainsV20140515UpdateTagsForDomainHandler,
  xAmzTargetRoute53DomainsV20140515ViewBillingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccountHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515AssociateDelegationSignerToDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccountHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515CheckDomainAvailabilityHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515CheckDomainTransferabilityHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515DeleteDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515DeleteTagsForDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515DisableDomainAutoRenewHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515DisableDomainTransferLockHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515DisassociateDelegationSignerFromDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515EnableDomainAutoRenewHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515EnableDomainTransferLockHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515GetContactReachabilityStatusHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515GetDomainDetailHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515GetDomainSuggestionsHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515GetOperationDetailHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ListDomainsHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ListOperationsHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ListPricesHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ListTagsForDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515PushDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515RegisterDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccountHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515RenewDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ResendContactReachabilityEmailHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ResendOperationAuthorizationHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515RetrieveDomainAuthCodeHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515TransferDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515TransferDomainToAnotherAwsAccountHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515UpdateDomainContactHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515UpdateDomainContactPrivacyHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515UpdateDomainNameserversHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515UpdateTagsForDomainHandler)
  .route('/', xAmzTargetRoute53DomainsV20140515ViewBillingHandler)

export default app
