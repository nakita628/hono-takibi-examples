import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSOrganizationsV20161128AcceptHandshakeHandler,
  XAmzTargetAWSOrganizationsV20161128AttachPolicyHandler,
  XAmzTargetAWSOrganizationsV20161128CancelHandshakeHandler,
  XAmzTargetAWSOrganizationsV20161128CloseAccountHandler,
  XAmzTargetAWSOrganizationsV20161128CreateAccountHandler,
  XAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountHandler,
  XAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitHandler,
  XAmzTargetAWSOrganizationsV20161128CreateOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128CreatePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DeclineHandshakeHandler,
  XAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitHandler,
  XAmzTargetAWSOrganizationsV20161128DeleteOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128DeletePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeAccountHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeHandshakeHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128DescribePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DetachPolicyHandler,
  XAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessHandler,
  XAmzTargetAWSOrganizationsV20161128DisablePolicyTypeHandler,
  XAmzTargetAWSOrganizationsV20161128EnableAllFeaturesHandler,
  XAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessHandler,
  XAmzTargetAWSOrganizationsV20161128EnablePolicyTypeHandler,
  XAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128LeaveOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128ListAccountsForParentHandler,
  XAmzTargetAWSOrganizationsV20161128ListAccountsHandler,
  XAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128ListChildrenHandler,
  XAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusHandler,
  XAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsHandler,
  XAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountHandler,
  XAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountHandler,
  XAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentHandler,
  XAmzTargetAWSOrganizationsV20161128ListParentsHandler,
  XAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetHandler,
  XAmzTargetAWSOrganizationsV20161128ListPoliciesHandler,
  XAmzTargetAWSOrganizationsV20161128ListRootsHandler,
  XAmzTargetAWSOrganizationsV20161128ListTagsForResourceHandler,
  XAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyHandler,
  XAmzTargetAWSOrganizationsV20161128MoveAccountHandler,
  XAmzTargetAWSOrganizationsV20161128PutResourcePolicyHandler,
  XAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorHandler,
  XAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationHandler,
  XAmzTargetAWSOrganizationsV20161128TagResourceHandler,
  XAmzTargetAWSOrganizationsV20161128UntagResourceHandler,
  XAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitHandler,
  XAmzTargetAWSOrganizationsV20161128UpdatePolicyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSOrganizationsV20161128AcceptHandshakeHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128AttachPolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CancelHandshakeHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CloseAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CreateAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CreateGovCloudAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CreateOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128CreatePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DeclineHandshakeHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DeleteOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DeleteOrganizationalUnitHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DeletePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DeleteResourcePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DeregisterDelegatedAdministratorHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeCreateAccountStatusHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeEffectivePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeHandshakeHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeOrganizationalUnitHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DescribeResourcePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DetachPolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DisableAWSServiceAccessHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128DisablePolicyTypeHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128EnableAWSServiceAccessHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128EnableAllFeaturesHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128EnablePolicyTypeHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128InviteAccountToOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128LeaveOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListAccountsHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListAccountsForParentHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListChildrenHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListCreateAccountStatusHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListHandshakesForAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListHandshakesForOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListOrganizationalUnitsForParentHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListParentsHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListPoliciesHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListPoliciesForTargetHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListRootsHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListTagsForResourceHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128ListTargetsForPolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128MoveAccountHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128PutResourcePolicyHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128RegisterDelegatedAdministratorHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128RemoveAccountFromOrganizationHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128TagResourceHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128UntagResourceHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128UpdateOrganizationalUnitHandler)
  .route('/', XAmzTargetAWSOrganizationsV20161128UpdatePolicyHandler)

export default app
