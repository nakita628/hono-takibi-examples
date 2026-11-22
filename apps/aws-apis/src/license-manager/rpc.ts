import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSLicenseManagerAcceptGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.AcceptGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.AcceptGrant'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCheckInLicense(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckInLicense']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CheckInLicense'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCheckoutBorrowLicense(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCheckoutLicense(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CheckoutLicense']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CheckoutLicense'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateGrant'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateGrantVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateGrantVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateLicense(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicense']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateLicense'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateLicenseConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGenerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateLicenseVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerCreateToken(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.CreateToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.CreateToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerDeleteGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.DeleteGrant'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerDeleteLicense(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicense']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.DeleteLicense'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerDeleteLicenseConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGenerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerDeleteToken(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.DeleteToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.DeleteToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerExtendLicenseConsumption(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetAccessToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetAccessToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetAccessToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetGrant'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetLicense(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicense']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetLicense'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetLicenseConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetLicenseConversionTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetLicenseManagerReportGenerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetLicenseUsage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetLicenseUsage'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerGetServiceSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.GetServiceSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.GetServiceSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerListDistributedGrants(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListDistributedGrants'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerListLicenseConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListLicenseConversionTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListLicenseManagerReportGenerators(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerListLicenseVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListLicenseVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListLicenses(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListLicenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListLicenses'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListReceivedGrants(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListReceivedGrants'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerListReceivedLicenses(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerListResourceInventory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListResourceInventory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListResourceInventory'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListTokens(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.ListTokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListTokens'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerListUsageForLicenseConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerRejectGrant(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.RejectGrant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.RejectGrant'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSLicenseManager.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerUpdateLicenseConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGenerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLicenseManagerUpdateServiceSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings'].$post(args, options),
  )
}
