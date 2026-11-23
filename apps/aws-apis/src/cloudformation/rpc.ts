import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionActivateOrganizationsAccess(
  args: InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ActivateOrganizationsAccess'].$get(args, options))
}

export async function postActionActivateOrganizationsAccess(
  args: InferRequestType<(typeof client)['#Action=ActivateOrganizationsAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ActivateOrganizationsAccess'].$post(args, options))
}

export async function getActionActivateType(
  args: InferRequestType<(typeof client)['#Action=ActivateType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ActivateType'].$get(args, options))
}

export async function postActionActivateType(
  args: InferRequestType<(typeof client)['#Action=ActivateType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ActivateType'].$post(args, options))
}

export async function getActionBatchDescribeTypeConfigurations(
  args: InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDescribeTypeConfigurations'].$get(args, options))
}

export async function postActionBatchDescribeTypeConfigurations(
  args: InferRequestType<(typeof client)['#Action=BatchDescribeTypeConfigurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=BatchDescribeTypeConfigurations'].$post(args, options))
}

export async function getActionCancelUpdateStack(
  args: InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelUpdateStack'].$get(args, options))
}

export async function postActionCancelUpdateStack(
  args: InferRequestType<(typeof client)['#Action=CancelUpdateStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelUpdateStack'].$post(args, options))
}

export async function getActionContinueUpdateRollback(
  args: InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ContinueUpdateRollback'].$get(args, options))
}

export async function postActionContinueUpdateRollback(
  args: InferRequestType<(typeof client)['#Action=ContinueUpdateRollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ContinueUpdateRollback'].$post(args, options))
}

export async function getActionCreateChangeSet(
  args: InferRequestType<(typeof client)['#Action=CreateChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateChangeSet'].$get(args, options))
}

export async function postActionCreateChangeSet(
  args: InferRequestType<(typeof client)['#Action=CreateChangeSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateChangeSet'].$post(args, options))
}

export async function getActionCreateStack(
  args: InferRequestType<(typeof client)['#Action=CreateStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStack'].$get(args, options))
}

export async function postActionCreateStack(
  args: InferRequestType<(typeof client)['#Action=CreateStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStack'].$post(args, options))
}

export async function getActionCreateStackInstances(
  args: InferRequestType<(typeof client)['#Action=CreateStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStackInstances'].$get(args, options))
}

export async function postActionCreateStackInstances(
  args: InferRequestType<(typeof client)['#Action=CreateStackInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStackInstances'].$post(args, options))
}

export async function getActionCreateStackSet(
  args: InferRequestType<(typeof client)['#Action=CreateStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStackSet'].$get(args, options))
}

export async function postActionCreateStackSet(
  args: InferRequestType<(typeof client)['#Action=CreateStackSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStackSet'].$post(args, options))
}

export async function getActionDeactivateOrganizationsAccess(
  args: InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeactivateOrganizationsAccess'].$get(args, options))
}

export async function postActionDeactivateOrganizationsAccess(
  args: InferRequestType<(typeof client)['#Action=DeactivateOrganizationsAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeactivateOrganizationsAccess'].$post(args, options))
}

export async function getActionDeactivateType(
  args: InferRequestType<(typeof client)['#Action=DeactivateType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeactivateType'].$get(args, options))
}

export async function postActionDeactivateType(
  args: InferRequestType<(typeof client)['#Action=DeactivateType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeactivateType'].$post(args, options))
}

export async function getActionDeleteChangeSet(
  args: InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteChangeSet'].$get(args, options))
}

export async function postActionDeleteChangeSet(
  args: InferRequestType<(typeof client)['#Action=DeleteChangeSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteChangeSet'].$post(args, options))
}

export async function getActionDeleteStack(
  args: InferRequestType<(typeof client)['#Action=DeleteStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteStack'].$get(args, options))
}

export async function postActionDeleteStack(
  args: InferRequestType<(typeof client)['#Action=DeleteStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteStack'].$post(args, options))
}

export async function getActionDeleteStackInstances(
  args: InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteStackInstances'].$get(args, options))
}

export async function postActionDeleteStackInstances(
  args: InferRequestType<(typeof client)['#Action=DeleteStackInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteStackInstances'].$post(args, options))
}

export async function getActionDeleteStackSet(
  args: InferRequestType<(typeof client)['#Action=DeleteStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteStackSet'].$get(args, options))
}

export async function postActionDeleteStackSet(
  args: InferRequestType<(typeof client)['#Action=DeleteStackSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteStackSet'].$post(args, options))
}

export async function getActionDeregisterType(
  args: InferRequestType<(typeof client)['#Action=DeregisterType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterType'].$get(args, options))
}

export async function postActionDeregisterType(
  args: InferRequestType<(typeof client)['#Action=DeregisterType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeregisterType'].$post(args, options))
}

export async function getActionDescribeAccountLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountLimits'].$get(args, options))
}

export async function postActionDescribeAccountLimits(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountLimits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountLimits'].$post(args, options))
}

export async function getActionDescribeChangeSet(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeChangeSet'].$get(args, options))
}

export async function postActionDescribeChangeSet(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeChangeSet'].$post(args, options))
}

export async function getActionDescribeChangeSetHooks(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeChangeSetHooks'].$get(args, options))
}

export async function postActionDescribeChangeSetHooks(
  args: InferRequestType<(typeof client)['#Action=DescribeChangeSetHooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeChangeSetHooks'].$post(args, options))
}

export async function getActionDescribeOrganizationsAccess(
  args: InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOrganizationsAccess'].$get(args, options))
}

export async function postActionDescribeOrganizationsAccess(
  args: InferRequestType<(typeof client)['#Action=DescribeOrganizationsAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeOrganizationsAccess'].$post(args, options))
}

export async function getActionDescribePublisher(
  args: InferRequestType<(typeof client)['#Action=DescribePublisher']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePublisher'].$get(args, options))
}

export async function postActionDescribePublisher(
  args: InferRequestType<(typeof client)['#Action=DescribePublisher']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePublisher'].$post(args, options))
}

export async function getActionDescribeStackDriftDetectionStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeStackDriftDetectionStatus'].$get(args, options),
  )
}

export async function postActionDescribeStackDriftDetectionStatus(
  args: InferRequestType<(typeof client)['#Action=DescribeStackDriftDetectionStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeStackDriftDetectionStatus'].$post(args, options),
  )
}

export async function getActionDescribeStackEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackEvents'].$get(args, options))
}

export async function postActionDescribeStackEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeStackEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackEvents'].$post(args, options))
}

export async function getActionDescribeStackInstance(
  args: InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackInstance'].$get(args, options))
}

export async function postActionDescribeStackInstance(
  args: InferRequestType<(typeof client)['#Action=DescribeStackInstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackInstance'].$post(args, options))
}

export async function getActionDescribeStackResource(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackResource'].$get(args, options))
}

export async function postActionDescribeStackResource(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackResource'].$post(args, options))
}

export async function getActionDescribeStackResourceDrifts(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackResourceDrifts'].$get(args, options))
}

export async function postActionDescribeStackResourceDrifts(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResourceDrifts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackResourceDrifts'].$post(args, options))
}

export async function getActionDescribeStackResources(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackResources'].$get(args, options))
}

export async function postActionDescribeStackResources(
  args: InferRequestType<(typeof client)['#Action=DescribeStackResources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackResources'].$post(args, options))
}

export async function getActionDescribeStackSet(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackSet'].$get(args, options))
}

export async function postActionDescribeStackSet(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackSet'].$post(args, options))
}

export async function getActionDescribeStackSetOperation(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackSetOperation'].$get(args, options))
}

export async function postActionDescribeStackSetOperation(
  args: InferRequestType<(typeof client)['#Action=DescribeStackSetOperation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStackSetOperation'].$post(args, options))
}

export async function getActionDescribeStacks(
  args: InferRequestType<(typeof client)['#Action=DescribeStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStacks'].$get(args, options))
}

export async function postActionDescribeStacks(
  args: InferRequestType<(typeof client)['#Action=DescribeStacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeStacks'].$post(args, options))
}

export async function getActionDescribeType(
  args: InferRequestType<(typeof client)['#Action=DescribeType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeType'].$get(args, options))
}

export async function postActionDescribeType(
  args: InferRequestType<(typeof client)['#Action=DescribeType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeType'].$post(args, options))
}

export async function getActionDescribeTypeRegistration(
  args: InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTypeRegistration'].$get(args, options))
}

export async function postActionDescribeTypeRegistration(
  args: InferRequestType<(typeof client)['#Action=DescribeTypeRegistration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeTypeRegistration'].$post(args, options))
}

export async function getActionDetectStackDrift(
  args: InferRequestType<(typeof client)['#Action=DetectStackDrift']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetectStackDrift'].$get(args, options))
}

export async function postActionDetectStackDrift(
  args: InferRequestType<(typeof client)['#Action=DetectStackDrift']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetectStackDrift'].$post(args, options))
}

export async function getActionDetectStackResourceDrift(
  args: InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetectStackResourceDrift'].$get(args, options))
}

export async function postActionDetectStackResourceDrift(
  args: InferRequestType<(typeof client)['#Action=DetectStackResourceDrift']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetectStackResourceDrift'].$post(args, options))
}

export async function getActionDetectStackSetDrift(
  args: InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetectStackSetDrift'].$get(args, options))
}

export async function postActionDetectStackSetDrift(
  args: InferRequestType<(typeof client)['#Action=DetectStackSetDrift']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetectStackSetDrift'].$post(args, options))
}

export async function getActionEstimateTemplateCost(
  args: InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EstimateTemplateCost'].$get(args, options))
}

export async function postActionEstimateTemplateCost(
  args: InferRequestType<(typeof client)['#Action=EstimateTemplateCost']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EstimateTemplateCost'].$post(args, options))
}

export async function getActionExecuteChangeSet(
  args: InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExecuteChangeSet'].$get(args, options))
}

export async function postActionExecuteChangeSet(
  args: InferRequestType<(typeof client)['#Action=ExecuteChangeSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ExecuteChangeSet'].$post(args, options))
}

export async function getActionGetStackPolicy(
  args: InferRequestType<(typeof client)['#Action=GetStackPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetStackPolicy'].$get(args, options))
}

export async function postActionGetStackPolicy(
  args: InferRequestType<(typeof client)['#Action=GetStackPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetStackPolicy'].$post(args, options))
}

export async function getActionGetTemplate(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTemplate'].$get(args, options))
}

export async function postActionGetTemplate(
  args: InferRequestType<(typeof client)['#Action=GetTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTemplate'].$post(args, options))
}

export async function getActionGetTemplateSummary(
  args: InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTemplateSummary'].$get(args, options))
}

export async function postActionGetTemplateSummary(
  args: InferRequestType<(typeof client)['#Action=GetTemplateSummary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetTemplateSummary'].$post(args, options))
}

export async function getActionImportStacksToStackSet(
  args: InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportStacksToStackSet'].$get(args, options))
}

export async function postActionImportStacksToStackSet(
  args: InferRequestType<(typeof client)['#Action=ImportStacksToStackSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ImportStacksToStackSet'].$post(args, options))
}

export async function getActionListChangeSets(
  args: InferRequestType<(typeof client)['#Action=ListChangeSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListChangeSets'].$get(args, options))
}

export async function postActionListChangeSets(
  args: InferRequestType<(typeof client)['#Action=ListChangeSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListChangeSets'].$post(args, options))
}

export async function getActionListExports(
  args: InferRequestType<(typeof client)['#Action=ListExports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListExports'].$get(args, options))
}

export async function postActionListExports(
  args: InferRequestType<(typeof client)['#Action=ListExports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListExports'].$post(args, options))
}

export async function getActionListImports(
  args: InferRequestType<(typeof client)['#Action=ListImports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListImports'].$get(args, options))
}

export async function postActionListImports(
  args: InferRequestType<(typeof client)['#Action=ListImports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListImports'].$post(args, options))
}

export async function getActionListStackInstanceResourceDrifts(
  args: InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackInstanceResourceDrifts'].$get(args, options))
}

export async function postActionListStackInstanceResourceDrifts(
  args: InferRequestType<(typeof client)['#Action=ListStackInstanceResourceDrifts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackInstanceResourceDrifts'].$post(args, options))
}

export async function getActionListStackInstances(
  args: InferRequestType<(typeof client)['#Action=ListStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackInstances'].$get(args, options))
}

export async function postActionListStackInstances(
  args: InferRequestType<(typeof client)['#Action=ListStackInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackInstances'].$post(args, options))
}

export async function getActionListStackResources(
  args: InferRequestType<(typeof client)['#Action=ListStackResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackResources'].$get(args, options))
}

export async function postActionListStackResources(
  args: InferRequestType<(typeof client)['#Action=ListStackResources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackResources'].$post(args, options))
}

export async function getActionListStackSetOperationResults(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackSetOperationResults'].$get(args, options))
}

export async function postActionListStackSetOperationResults(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperationResults']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackSetOperationResults'].$post(args, options))
}

export async function getActionListStackSetOperations(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackSetOperations'].$get(args, options))
}

export async function postActionListStackSetOperations(
  args: InferRequestType<(typeof client)['#Action=ListStackSetOperations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackSetOperations'].$post(args, options))
}

export async function getActionListStackSets(
  args: InferRequestType<(typeof client)['#Action=ListStackSets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackSets'].$get(args, options))
}

export async function postActionListStackSets(
  args: InferRequestType<(typeof client)['#Action=ListStackSets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStackSets'].$post(args, options))
}

export async function getActionListStacks(
  args: InferRequestType<(typeof client)['#Action=ListStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStacks'].$get(args, options))
}

export async function postActionListStacks(
  args: InferRequestType<(typeof client)['#Action=ListStacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListStacks'].$post(args, options))
}

export async function getActionListTypeRegistrations(
  args: InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTypeRegistrations'].$get(args, options))
}

export async function postActionListTypeRegistrations(
  args: InferRequestType<(typeof client)['#Action=ListTypeRegistrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTypeRegistrations'].$post(args, options))
}

export async function getActionListTypeVersions(
  args: InferRequestType<(typeof client)['#Action=ListTypeVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTypeVersions'].$get(args, options))
}

export async function postActionListTypeVersions(
  args: InferRequestType<(typeof client)['#Action=ListTypeVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTypeVersions'].$post(args, options))
}

export async function getActionListTypes(
  args: InferRequestType<(typeof client)['#Action=ListTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTypes'].$get(args, options))
}

export async function postActionListTypes(
  args: InferRequestType<(typeof client)['#Action=ListTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTypes'].$post(args, options))
}

export async function getActionPublishType(
  args: InferRequestType<(typeof client)['#Action=PublishType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PublishType'].$get(args, options))
}

export async function postActionPublishType(
  args: InferRequestType<(typeof client)['#Action=PublishType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PublishType'].$post(args, options))
}

export async function getActionRecordHandlerProgress(
  args: InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RecordHandlerProgress'].$get(args, options))
}

export async function postActionRecordHandlerProgress(
  args: InferRequestType<(typeof client)['#Action=RecordHandlerProgress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RecordHandlerProgress'].$post(args, options))
}

export async function getActionRegisterPublisher(
  args: InferRequestType<(typeof client)['#Action=RegisterPublisher']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterPublisher'].$get(args, options))
}

export async function postActionRegisterPublisher(
  args: InferRequestType<(typeof client)['#Action=RegisterPublisher']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterPublisher'].$post(args, options))
}

export async function getActionRegisterType(
  args: InferRequestType<(typeof client)['#Action=RegisterType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterType'].$get(args, options))
}

export async function postActionRegisterType(
  args: InferRequestType<(typeof client)['#Action=RegisterType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RegisterType'].$post(args, options))
}

export async function getActionRollbackStack(
  args: InferRequestType<(typeof client)['#Action=RollbackStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RollbackStack'].$get(args, options))
}

export async function postActionRollbackStack(
  args: InferRequestType<(typeof client)['#Action=RollbackStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RollbackStack'].$post(args, options))
}

export async function getActionSetStackPolicy(
  args: InferRequestType<(typeof client)['#Action=SetStackPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetStackPolicy'].$get(args, options))
}

export async function postActionSetStackPolicy(
  args: InferRequestType<(typeof client)['#Action=SetStackPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetStackPolicy'].$post(args, options))
}

export async function getActionSetTypeConfiguration(
  args: InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetTypeConfiguration'].$get(args, options))
}

export async function postActionSetTypeConfiguration(
  args: InferRequestType<(typeof client)['#Action=SetTypeConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetTypeConfiguration'].$post(args, options))
}

export async function getActionSetTypeDefaultVersion(
  args: InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetTypeDefaultVersion'].$get(args, options))
}

export async function postActionSetTypeDefaultVersion(
  args: InferRequestType<(typeof client)['#Action=SetTypeDefaultVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetTypeDefaultVersion'].$post(args, options))
}

export async function getActionSignalResource(
  args: InferRequestType<(typeof client)['#Action=SignalResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SignalResource'].$get(args, options))
}

export async function postActionSignalResource(
  args: InferRequestType<(typeof client)['#Action=SignalResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SignalResource'].$post(args, options))
}

export async function getActionStopStackSetOperation(
  args: InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopStackSetOperation'].$get(args, options))
}

export async function postActionStopStackSetOperation(
  args: InferRequestType<(typeof client)['#Action=StopStackSetOperation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StopStackSetOperation'].$post(args, options))
}

export async function getActionTestType(
  args: InferRequestType<(typeof client)['#Action=TestType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TestType'].$get(args, options))
}

export async function postActionTestType(
  args: InferRequestType<(typeof client)['#Action=TestType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TestType'].$post(args, options))
}

export async function getActionUpdateStack(
  args: InferRequestType<(typeof client)['#Action=UpdateStack']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateStack'].$get(args, options))
}

export async function postActionUpdateStack(
  args: InferRequestType<(typeof client)['#Action=UpdateStack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateStack'].$post(args, options))
}

export async function getActionUpdateStackInstances(
  args: InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateStackInstances'].$get(args, options))
}

export async function postActionUpdateStackInstances(
  args: InferRequestType<(typeof client)['#Action=UpdateStackInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateStackInstances'].$post(args, options))
}

export async function getActionUpdateStackSet(
  args: InferRequestType<(typeof client)['#Action=UpdateStackSet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateStackSet'].$get(args, options))
}

export async function postActionUpdateStackSet(
  args: InferRequestType<(typeof client)['#Action=UpdateStackSet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateStackSet'].$post(args, options))
}

export async function getActionUpdateTerminationProtection(
  args: InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateTerminationProtection'].$get(args, options))
}

export async function postActionUpdateTerminationProtection(
  args: InferRequestType<(typeof client)['#Action=UpdateTerminationProtection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateTerminationProtection'].$post(args, options))
}

export async function getActionValidateTemplate(
  args: InferRequestType<(typeof client)['#Action=ValidateTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ValidateTemplate'].$get(args, options))
}

export async function postActionValidateTemplate(
  args: InferRequestType<(typeof client)['#Action=ValidateTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ValidateTemplate'].$post(args, options))
}
