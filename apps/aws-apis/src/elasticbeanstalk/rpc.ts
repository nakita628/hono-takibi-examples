import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAbortEnvironmentUpdate(
  args: InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AbortEnvironmentUpdate'].$get(args, options))
}

export async function postActionAbortEnvironmentUpdate(
  args: InferRequestType<(typeof client)['#Action=AbortEnvironmentUpdate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AbortEnvironmentUpdate'].$post(args, options))
}

export async function getActionApplyEnvironmentManagedAction(
  args: InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ApplyEnvironmentManagedAction'].$get(args, options))
}

export async function postActionApplyEnvironmentManagedAction(
  args: InferRequestType<(typeof client)['#Action=ApplyEnvironmentManagedAction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ApplyEnvironmentManagedAction'].$post(args, options))
}

export async function getActionAssociateEnvironmentOperationsRole(
  args: InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateEnvironmentOperationsRole'].$get(args, options),
  )
}

export async function postActionAssociateEnvironmentOperationsRole(
  args: InferRequestType<(typeof client)['#Action=AssociateEnvironmentOperationsRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AssociateEnvironmentOperationsRole'].$post(args, options),
  )
}

export async function getActionCheckDNSAvailability(
  args: InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CheckDNSAvailability'].$get(args, options))
}

export async function postActionCheckDNSAvailability(
  args: InferRequestType<(typeof client)['#Action=CheckDNSAvailability']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CheckDNSAvailability'].$post(args, options))
}

export async function getActionComposeEnvironments(
  args: InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ComposeEnvironments'].$get(args, options))
}

export async function postActionComposeEnvironments(
  args: InferRequestType<(typeof client)['#Action=ComposeEnvironments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ComposeEnvironments'].$post(args, options))
}

export async function getActionCreateApplication(
  args: InferRequestType<(typeof client)['#Action=CreateApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateApplication'].$get(args, options))
}

export async function postActionCreateApplication(
  args: InferRequestType<(typeof client)['#Action=CreateApplication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateApplication'].$post(args, options))
}

export async function getActionCreateApplicationVersion(
  args: InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateApplicationVersion'].$get(args, options))
}

export async function postActionCreateApplicationVersion(
  args: InferRequestType<(typeof client)['#Action=CreateApplicationVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateApplicationVersion'].$post(args, options))
}

export async function getActionCreateConfigurationTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateConfigurationTemplate'].$get(args, options))
}

export async function postActionCreateConfigurationTemplate(
  args: InferRequestType<(typeof client)['#Action=CreateConfigurationTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateConfigurationTemplate'].$post(args, options))
}

export async function getActionCreateEnvironment(
  args: InferRequestType<(typeof client)['#Action=CreateEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEnvironment'].$get(args, options))
}

export async function postActionCreateEnvironment(
  args: InferRequestType<(typeof client)['#Action=CreateEnvironment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateEnvironment'].$post(args, options))
}

export async function getActionCreatePlatformVersion(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlatformVersion'].$get(args, options))
}

export async function postActionCreatePlatformVersion(
  args: InferRequestType<(typeof client)['#Action=CreatePlatformVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePlatformVersion'].$post(args, options))
}

export async function getActionCreateStorageLocation(
  args: InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStorageLocation'].$get(args, options))
}

export async function postActionCreateStorageLocation(
  args: InferRequestType<(typeof client)['#Action=CreateStorageLocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateStorageLocation'].$post(args, options))
}

export async function getActionDeleteApplication(
  args: InferRequestType<(typeof client)['#Action=DeleteApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteApplication'].$get(args, options))
}

export async function postActionDeleteApplication(
  args: InferRequestType<(typeof client)['#Action=DeleteApplication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteApplication'].$post(args, options))
}

export async function getActionDeleteApplicationVersion(
  args: InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteApplicationVersion'].$get(args, options))
}

export async function postActionDeleteApplicationVersion(
  args: InferRequestType<(typeof client)['#Action=DeleteApplicationVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteApplicationVersion'].$post(args, options))
}

export async function getActionDeleteConfigurationTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteConfigurationTemplate'].$get(args, options))
}

export async function postActionDeleteConfigurationTemplate(
  args: InferRequestType<(typeof client)['#Action=DeleteConfigurationTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteConfigurationTemplate'].$post(args, options))
}

export async function getActionDeleteEnvironmentConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEnvironmentConfiguration'].$get(args, options))
}

export async function postActionDeleteEnvironmentConfiguration(
  args: InferRequestType<(typeof client)['#Action=DeleteEnvironmentConfiguration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteEnvironmentConfiguration'].$post(args, options))
}

export async function getActionDeletePlatformVersion(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePlatformVersion'].$get(args, options))
}

export async function postActionDeletePlatformVersion(
  args: InferRequestType<(typeof client)['#Action=DeletePlatformVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePlatformVersion'].$post(args, options))
}

export async function getActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$get(args, options))
}

export async function postActionDescribeAccountAttributes(
  args: InferRequestType<(typeof client)['#Action=DescribeAccountAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeAccountAttributes'].$post(args, options))
}

export async function getActionDescribeApplicationVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeApplicationVersions'].$get(args, options))
}

export async function postActionDescribeApplicationVersions(
  args: InferRequestType<(typeof client)['#Action=DescribeApplicationVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeApplicationVersions'].$post(args, options))
}

export async function getActionDescribeApplications(
  args: InferRequestType<(typeof client)['#Action=DescribeApplications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeApplications'].$get(args, options))
}

export async function postActionDescribeApplications(
  args: InferRequestType<(typeof client)['#Action=DescribeApplications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeApplications'].$post(args, options))
}

export async function getActionDescribeConfigurationOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConfigurationOptions'].$get(args, options))
}

export async function postActionDescribeConfigurationOptions(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationOptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConfigurationOptions'].$post(args, options))
}

export async function getActionDescribeConfigurationSettings(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConfigurationSettings'].$get(args, options))
}

export async function postActionDescribeConfigurationSettings(
  args: InferRequestType<(typeof client)['#Action=DescribeConfigurationSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeConfigurationSettings'].$post(args, options))
}

export async function getActionDescribeEnvironmentHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEnvironmentHealth'].$get(args, options))
}

export async function postActionDescribeEnvironmentHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentHealth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEnvironmentHealth'].$post(args, options))
}

export async function getActionDescribeEnvironmentManagedActionHistory(
  args: InferRequestType<
    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEnvironmentManagedActionHistory'].$get(args, options),
  )
}

export async function postActionDescribeEnvironmentManagedActionHistory(
  args: InferRequestType<
    (typeof client)['#Action=DescribeEnvironmentManagedActionHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEnvironmentManagedActionHistory'].$post(args, options),
  )
}

export async function getActionDescribeEnvironmentManagedActions(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEnvironmentManagedActions'].$get(args, options),
  )
}

export async function postActionDescribeEnvironmentManagedActions(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentManagedActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DescribeEnvironmentManagedActions'].$post(args, options),
  )
}

export async function getActionDescribeEnvironmentResources(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEnvironmentResources'].$get(args, options))
}

export async function postActionDescribeEnvironmentResources(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironmentResources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEnvironmentResources'].$post(args, options))
}

export async function getActionDescribeEnvironments(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEnvironments'].$get(args, options))
}

export async function postActionDescribeEnvironments(
  args: InferRequestType<(typeof client)['#Action=DescribeEnvironments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEnvironments'].$post(args, options))
}

export async function getActionDescribeEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEvents'].$get(args, options))
}

export async function postActionDescribeEvents(
  args: InferRequestType<(typeof client)['#Action=DescribeEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeEvents'].$post(args, options))
}

export async function getActionDescribeInstancesHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstancesHealth'].$get(args, options))
}

export async function postActionDescribeInstancesHealth(
  args: InferRequestType<(typeof client)['#Action=DescribeInstancesHealth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribeInstancesHealth'].$post(args, options))
}

export async function getActionDescribePlatformVersion(
  args: InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePlatformVersion'].$get(args, options))
}

export async function postActionDescribePlatformVersion(
  args: InferRequestType<(typeof client)['#Action=DescribePlatformVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DescribePlatformVersion'].$post(args, options))
}

export async function getActionDisassociateEnvironmentOperationsRole(
  args: InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateEnvironmentOperationsRole'].$get(args, options),
  )
}

export async function postActionDisassociateEnvironmentOperationsRole(
  args: InferRequestType<(typeof client)['#Action=DisassociateEnvironmentOperationsRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=DisassociateEnvironmentOperationsRole'].$post(args, options),
  )
}

export async function getActionListAvailableSolutionStacks(
  args: InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAvailableSolutionStacks'].$get(args, options))
}

export async function postActionListAvailableSolutionStacks(
  args: InferRequestType<(typeof client)['#Action=ListAvailableSolutionStacks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAvailableSolutionStacks'].$post(args, options))
}

export async function getActionListPlatformBranches(
  args: InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPlatformBranches'].$get(args, options))
}

export async function postActionListPlatformBranches(
  args: InferRequestType<(typeof client)['#Action=ListPlatformBranches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPlatformBranches'].$post(args, options))
}

export async function getActionListPlatformVersions(
  args: InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPlatformVersions'].$get(args, options))
}

export async function postActionListPlatformVersions(
  args: InferRequestType<(typeof client)['#Action=ListPlatformVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPlatformVersions'].$post(args, options))
}

export async function getActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$get(args, options))
}

export async function postActionListTagsForResource(
  args: InferRequestType<(typeof client)['#Action=ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListTagsForResource'].$post(args, options))
}

export async function getActionRebuildEnvironment(
  args: InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebuildEnvironment'].$get(args, options))
}

export async function postActionRebuildEnvironment(
  args: InferRequestType<(typeof client)['#Action=RebuildEnvironment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RebuildEnvironment'].$post(args, options))
}

export async function getActionRequestEnvironmentInfo(
  args: InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RequestEnvironmentInfo'].$get(args, options))
}

export async function postActionRequestEnvironmentInfo(
  args: InferRequestType<(typeof client)['#Action=RequestEnvironmentInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RequestEnvironmentInfo'].$post(args, options))
}

export async function getActionRestartAppServer(
  args: InferRequestType<(typeof client)['#Action=RestartAppServer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestartAppServer'].$get(args, options))
}

export async function postActionRestartAppServer(
  args: InferRequestType<(typeof client)['#Action=RestartAppServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RestartAppServer'].$post(args, options))
}

export async function getActionRetrieveEnvironmentInfo(
  args: InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RetrieveEnvironmentInfo'].$get(args, options))
}

export async function postActionRetrieveEnvironmentInfo(
  args: InferRequestType<(typeof client)['#Action=RetrieveEnvironmentInfo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RetrieveEnvironmentInfo'].$post(args, options))
}

export async function getActionSwapEnvironmentCNAMEs(
  args: InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SwapEnvironmentCNAMEs'].$get(args, options))
}

export async function postActionSwapEnvironmentCNAMEs(
  args: InferRequestType<(typeof client)['#Action=SwapEnvironmentCNAMEs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SwapEnvironmentCNAMEs'].$post(args, options))
}

export async function getActionTerminateEnvironment(
  args: InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TerminateEnvironment'].$get(args, options))
}

export async function postActionTerminateEnvironment(
  args: InferRequestType<(typeof client)['#Action=TerminateEnvironment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TerminateEnvironment'].$post(args, options))
}

export async function getActionUpdateApplication(
  args: InferRequestType<(typeof client)['#Action=UpdateApplication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateApplication'].$get(args, options))
}

export async function postActionUpdateApplication(
  args: InferRequestType<(typeof client)['#Action=UpdateApplication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateApplication'].$post(args, options))
}

export async function getActionUpdateApplicationResourceLifecycle(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateApplicationResourceLifecycle'].$get(args, options),
  )
}

export async function postActionUpdateApplicationResourceLifecycle(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationResourceLifecycle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateApplicationResourceLifecycle'].$post(args, options),
  )
}

export async function getActionUpdateApplicationVersion(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateApplicationVersion'].$get(args, options))
}

export async function postActionUpdateApplicationVersion(
  args: InferRequestType<(typeof client)['#Action=UpdateApplicationVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateApplicationVersion'].$post(args, options))
}

export async function getActionUpdateConfigurationTemplate(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateConfigurationTemplate'].$get(args, options))
}

export async function postActionUpdateConfigurationTemplate(
  args: InferRequestType<(typeof client)['#Action=UpdateConfigurationTemplate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateConfigurationTemplate'].$post(args, options))
}

export async function getActionUpdateEnvironment(
  args: InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateEnvironment'].$get(args, options))
}

export async function postActionUpdateEnvironment(
  args: InferRequestType<(typeof client)['#Action=UpdateEnvironment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateEnvironment'].$post(args, options))
}

export async function getActionUpdateTagsForResource(
  args: InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateTagsForResource'].$get(args, options))
}

export async function postActionUpdateTagsForResource(
  args: InferRequestType<(typeof client)['#Action=UpdateTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateTagsForResource'].$post(args, options))
}

export async function getActionValidateConfigurationSettings(
  args: InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ValidateConfigurationSettings'].$get(args, options))
}

export async function postActionValidateConfigurationSettings(
  args: InferRequestType<(typeof client)['#Action=ValidateConfigurationSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ValidateConfigurationSettings'].$post(args, options))
}
