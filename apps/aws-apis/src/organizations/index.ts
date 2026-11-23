import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsOrganizationsV20161128AcceptHandshakeHandler,
  xAmzTargetAwsOrganizationsV20161128AttachPolicyHandler,
  xAmzTargetAwsOrganizationsV20161128CancelHandshakeHandler,
  xAmzTargetAwsOrganizationsV20161128CloseAccountHandler,
  xAmzTargetAwsOrganizationsV20161128CreateAccountHandler,
  xAmzTargetAwsOrganizationsV20161128CreateGovCloudAccountHandler,
  xAmzTargetAwsOrganizationsV20161128CreateOrganizationalUnitHandler,
  xAmzTargetAwsOrganizationsV20161128CreateOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128CreatePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DeclineHandshakeHandler,
  xAmzTargetAwsOrganizationsV20161128DeleteOrganizationalUnitHandler,
  xAmzTargetAwsOrganizationsV20161128DeleteOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128DeletePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DeleteResourcePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DeregisterDelegatedAdministratorHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeAccountHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeCreateAccountStatusHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeEffectivePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeHandshakeHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeOrganizationalUnitHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128DescribePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DescribeResourcePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DetachPolicyHandler,
  xAmzTargetAwsOrganizationsV20161128DisableAwsServiceAccessHandler,
  xAmzTargetAwsOrganizationsV20161128DisablePolicyTypeHandler,
  xAmzTargetAwsOrganizationsV20161128EnableAllFeaturesHandler,
  xAmzTargetAwsOrganizationsV20161128EnableAwsServiceAccessHandler,
  xAmzTargetAwsOrganizationsV20161128EnablePolicyTypeHandler,
  xAmzTargetAwsOrganizationsV20161128InviteAccountToOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128LeaveOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128ListAccountsForParentHandler,
  xAmzTargetAwsOrganizationsV20161128ListAccountsHandler,
  xAmzTargetAwsOrganizationsV20161128ListAwsServiceAccessForOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128ListChildrenHandler,
  xAmzTargetAwsOrganizationsV20161128ListCreateAccountStatusHandler,
  xAmzTargetAwsOrganizationsV20161128ListDelegatedAdministratorsHandler,
  xAmzTargetAwsOrganizationsV20161128ListDelegatedServicesForAccountHandler,
  xAmzTargetAwsOrganizationsV20161128ListHandshakesForAccountHandler,
  xAmzTargetAwsOrganizationsV20161128ListHandshakesForOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128ListOrganizationalUnitsForParentHandler,
  xAmzTargetAwsOrganizationsV20161128ListParentsHandler,
  xAmzTargetAwsOrganizationsV20161128ListPoliciesForTargetHandler,
  xAmzTargetAwsOrganizationsV20161128ListPoliciesHandler,
  xAmzTargetAwsOrganizationsV20161128ListRootsHandler,
  xAmzTargetAwsOrganizationsV20161128ListTagsForResourceHandler,
  xAmzTargetAwsOrganizationsV20161128ListTargetsForPolicyHandler,
  xAmzTargetAwsOrganizationsV20161128MoveAccountHandler,
  xAmzTargetAwsOrganizationsV20161128PutResourcePolicyHandler,
  xAmzTargetAwsOrganizationsV20161128RegisterDelegatedAdministratorHandler,
  xAmzTargetAwsOrganizationsV20161128RemoveAccountFromOrganizationHandler,
  xAmzTargetAwsOrganizationsV20161128TagResourceHandler,
  xAmzTargetAwsOrganizationsV20161128UntagResourceHandler,
  xAmzTargetAwsOrganizationsV20161128UpdateOrganizationalUnitHandler,
  xAmzTargetAwsOrganizationsV20161128UpdatePolicyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsOrganizationsV20161128AcceptHandshakeHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128AttachPolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CancelHandshakeHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CloseAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CreateAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CreateGovCloudAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CreateOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CreateOrganizationalUnitHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128CreatePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DeclineHandshakeHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DeleteOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DeleteOrganizationalUnitHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DeletePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DeleteResourcePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DeregisterDelegatedAdministratorHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeCreateAccountStatusHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeEffectivePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeHandshakeHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeOrganizationalUnitHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DescribeResourcePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DetachPolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DisableAwsServiceAccessHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128DisablePolicyTypeHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128EnableAwsServiceAccessHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128EnableAllFeaturesHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128EnablePolicyTypeHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128InviteAccountToOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128LeaveOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListAwsServiceAccessForOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListAccountsHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListAccountsForParentHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListChildrenHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListCreateAccountStatusHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListDelegatedAdministratorsHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListDelegatedServicesForAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListHandshakesForAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListHandshakesForOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListOrganizationalUnitsForParentHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListParentsHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListPoliciesHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListPoliciesForTargetHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListRootsHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListTagsForResourceHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128ListTargetsForPolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128MoveAccountHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128PutResourcePolicyHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128RegisterDelegatedAdministratorHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128RemoveAccountFromOrganizationHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128TagResourceHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128UntagResourceHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128UpdateOrganizationalUnitHandler)
  .route('/', xAmzTargetAwsOrganizationsV20161128UpdatePolicyHandler)

export default app
