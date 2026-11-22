import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetDeviceFarm20150623CreateDevicePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateDevicePool'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateInstanceProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateInstanceProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateRemoteAccessSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateRemoteAccessSession'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateTestGridProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateTestGridUrl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateTestGridUrl'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateUpload'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623CreateVPCEConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.CreateVPCEConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteDevicePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteDevicePool'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteInstanceProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteInstanceProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteRemoteAccessSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteRemoteAccessSession'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteRun'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteTestGridProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteTestGridProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteUpload'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623DeleteVPCEConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.DeleteVPCEConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetAccountSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetAccountSettings'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetDevice(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetDevice'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetDeviceInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetDeviceInstance'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetDevicePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetDevicePool'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetDevicePoolCompatibility(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetDevicePoolCompatibility'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetInstanceProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetInstanceProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetJob'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetOfferingStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetOfferingStatus'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetProject(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetProject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetRemoteAccessSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetRemoteAccessSession'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetRun'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetSuite(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetSuite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetSuite'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetTest(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetTest'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetTestGridProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetTestGridProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetTestGridSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetTestGridSession'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetUpload(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetUpload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetUpload'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623GetVPCEConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.GetVPCEConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623InstallToRemoteAccessSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.InstallToRemoteAccessSession'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListArtifacts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListArtifacts'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListDeviceInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListDeviceInstances'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListDevicePools(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListDevicePools'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListDevices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListDevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListDevices'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListInstanceProfiles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListInstanceProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListJobs'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListNetworkProfiles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListNetworkProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListOfferingPromotions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListOfferingPromotions'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListOfferingTransactions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListOfferingTransactions'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListOfferings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListOfferings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListOfferings'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListProjects(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListProjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListProjects'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListRemoteAccessSessions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListRemoteAccessSessions'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListRuns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListRuns'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListSamples(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSamples']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListSamples'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListSuites(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListSuites']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListSuites'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListTestGridProjects(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridProjects'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListTestGridSessionActions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionActions'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListTestGridSessionArtifacts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessionArtifacts'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListTestGridSessions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListTestGridSessions'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListTests(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListTests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListTests'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListUniqueProblems(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListUniqueProblems'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListUploads(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListUploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListUploads'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ListVPCEConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ListVPCEConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623PurchaseOffering(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.PurchaseOffering'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623RenewOffering(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.RenewOffering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.RenewOffering'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623ScheduleRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.ScheduleRun'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623StopJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.StopJob'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623StopRemoteAccessSession(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.StopRemoteAccessSession'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623StopRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.StopRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.StopRun'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DeviceFarm_20150623.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateDeviceInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateDeviceInstance'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateDevicePool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateDevicePool'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateInstanceProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateInstanceProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateNetworkProfile(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateNetworkProfile'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateTestGridProject(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateTestGridProject'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateUpload'].$post(args, options),
  )
}

export async function postXAmzTargetDeviceFarm20150623UpdateVPCEConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DeviceFarm_20150623.UpdateVPCEConfiguration'].$post(args, options),
  )
}
