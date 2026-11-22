import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetDeviceFarm20150623CreateDevicePoolHandler,
  XAmzTargetDeviceFarm20150623CreateInstanceProfileHandler,
  XAmzTargetDeviceFarm20150623CreateNetworkProfileHandler,
  XAmzTargetDeviceFarm20150623CreateProjectHandler,
  XAmzTargetDeviceFarm20150623CreateRemoteAccessSessionHandler,
  XAmzTargetDeviceFarm20150623CreateTestGridProjectHandler,
  XAmzTargetDeviceFarm20150623CreateTestGridUrlHandler,
  XAmzTargetDeviceFarm20150623CreateUploadHandler,
  XAmzTargetDeviceFarm20150623CreateVPCEConfigurationHandler,
  XAmzTargetDeviceFarm20150623DeleteDevicePoolHandler,
  XAmzTargetDeviceFarm20150623DeleteInstanceProfileHandler,
  XAmzTargetDeviceFarm20150623DeleteNetworkProfileHandler,
  XAmzTargetDeviceFarm20150623DeleteProjectHandler,
  XAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionHandler,
  XAmzTargetDeviceFarm20150623DeleteRunHandler,
  XAmzTargetDeviceFarm20150623DeleteTestGridProjectHandler,
  XAmzTargetDeviceFarm20150623DeleteUploadHandler,
  XAmzTargetDeviceFarm20150623DeleteVPCEConfigurationHandler,
  XAmzTargetDeviceFarm20150623GetAccountSettingsHandler,
  XAmzTargetDeviceFarm20150623GetDeviceHandler,
  XAmzTargetDeviceFarm20150623GetDeviceInstanceHandler,
  XAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityHandler,
  XAmzTargetDeviceFarm20150623GetDevicePoolHandler,
  XAmzTargetDeviceFarm20150623GetInstanceProfileHandler,
  XAmzTargetDeviceFarm20150623GetJobHandler,
  XAmzTargetDeviceFarm20150623GetNetworkProfileHandler,
  XAmzTargetDeviceFarm20150623GetOfferingStatusHandler,
  XAmzTargetDeviceFarm20150623GetProjectHandler,
  XAmzTargetDeviceFarm20150623GetRemoteAccessSessionHandler,
  XAmzTargetDeviceFarm20150623GetRunHandler,
  XAmzTargetDeviceFarm20150623GetSuiteHandler,
  XAmzTargetDeviceFarm20150623GetTestGridProjectHandler,
  XAmzTargetDeviceFarm20150623GetTestGridSessionHandler,
  XAmzTargetDeviceFarm20150623GetTestHandler,
  XAmzTargetDeviceFarm20150623GetUploadHandler,
  XAmzTargetDeviceFarm20150623GetVPCEConfigurationHandler,
  XAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionHandler,
  XAmzTargetDeviceFarm20150623ListArtifactsHandler,
  XAmzTargetDeviceFarm20150623ListDeviceInstancesHandler,
  XAmzTargetDeviceFarm20150623ListDevicePoolsHandler,
  XAmzTargetDeviceFarm20150623ListDevicesHandler,
  XAmzTargetDeviceFarm20150623ListInstanceProfilesHandler,
  XAmzTargetDeviceFarm20150623ListJobsHandler,
  XAmzTargetDeviceFarm20150623ListNetworkProfilesHandler,
  XAmzTargetDeviceFarm20150623ListOfferingPromotionsHandler,
  XAmzTargetDeviceFarm20150623ListOfferingsHandler,
  XAmzTargetDeviceFarm20150623ListOfferingTransactionsHandler,
  XAmzTargetDeviceFarm20150623ListProjectsHandler,
  XAmzTargetDeviceFarm20150623ListRemoteAccessSessionsHandler,
  XAmzTargetDeviceFarm20150623ListRunsHandler,
  XAmzTargetDeviceFarm20150623ListSamplesHandler,
  XAmzTargetDeviceFarm20150623ListSuitesHandler,
  XAmzTargetDeviceFarm20150623ListTagsForResourceHandler,
  XAmzTargetDeviceFarm20150623ListTestGridProjectsHandler,
  XAmzTargetDeviceFarm20150623ListTestGridSessionActionsHandler,
  XAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsHandler,
  XAmzTargetDeviceFarm20150623ListTestGridSessionsHandler,
  XAmzTargetDeviceFarm20150623ListTestsHandler,
  XAmzTargetDeviceFarm20150623ListUniqueProblemsHandler,
  XAmzTargetDeviceFarm20150623ListUploadsHandler,
  XAmzTargetDeviceFarm20150623ListVPCEConfigurationsHandler,
  XAmzTargetDeviceFarm20150623PurchaseOfferingHandler,
  XAmzTargetDeviceFarm20150623RenewOfferingHandler,
  XAmzTargetDeviceFarm20150623ScheduleRunHandler,
  XAmzTargetDeviceFarm20150623StopJobHandler,
  XAmzTargetDeviceFarm20150623StopRemoteAccessSessionHandler,
  XAmzTargetDeviceFarm20150623StopRunHandler,
  XAmzTargetDeviceFarm20150623TagResourceHandler,
  XAmzTargetDeviceFarm20150623UntagResourceHandler,
  XAmzTargetDeviceFarm20150623UpdateDeviceInstanceHandler,
  XAmzTargetDeviceFarm20150623UpdateDevicePoolHandler,
  XAmzTargetDeviceFarm20150623UpdateInstanceProfileHandler,
  XAmzTargetDeviceFarm20150623UpdateNetworkProfileHandler,
  XAmzTargetDeviceFarm20150623UpdateProjectHandler,
  XAmzTargetDeviceFarm20150623UpdateTestGridProjectHandler,
  XAmzTargetDeviceFarm20150623UpdateUploadHandler,
  XAmzTargetDeviceFarm20150623UpdateVPCEConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetDeviceFarm20150623CreateDevicePoolHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateInstanceProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateNetworkProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateRemoteAccessSessionHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateTestGridProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateTestGridUrlHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateUploadHandler)
  .route('/', XAmzTargetDeviceFarm20150623CreateVPCEConfigurationHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteDevicePoolHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteInstanceProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteNetworkProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteRunHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteTestGridProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteUploadHandler)
  .route('/', XAmzTargetDeviceFarm20150623DeleteVPCEConfigurationHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetAccountSettingsHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetDeviceHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetDeviceInstanceHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetDevicePoolHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetInstanceProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetJobHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetNetworkProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetOfferingStatusHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetRemoteAccessSessionHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetRunHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetSuiteHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetTestHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetTestGridProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetTestGridSessionHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetUploadHandler)
  .route('/', XAmzTargetDeviceFarm20150623GetVPCEConfigurationHandler)
  .route('/', XAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListArtifactsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListDeviceInstancesHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListDevicePoolsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListDevicesHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListInstanceProfilesHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListJobsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListNetworkProfilesHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListOfferingPromotionsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListOfferingTransactionsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListOfferingsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListProjectsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListRemoteAccessSessionsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListRunsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListSamplesHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListSuitesHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListTagsForResourceHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListTestGridProjectsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListTestGridSessionActionsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListTestGridSessionsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListTestsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListUniqueProblemsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListUploadsHandler)
  .route('/', XAmzTargetDeviceFarm20150623ListVPCEConfigurationsHandler)
  .route('/', XAmzTargetDeviceFarm20150623PurchaseOfferingHandler)
  .route('/', XAmzTargetDeviceFarm20150623RenewOfferingHandler)
  .route('/', XAmzTargetDeviceFarm20150623ScheduleRunHandler)
  .route('/', XAmzTargetDeviceFarm20150623StopJobHandler)
  .route('/', XAmzTargetDeviceFarm20150623StopRemoteAccessSessionHandler)
  .route('/', XAmzTargetDeviceFarm20150623StopRunHandler)
  .route('/', XAmzTargetDeviceFarm20150623TagResourceHandler)
  .route('/', XAmzTargetDeviceFarm20150623UntagResourceHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateDeviceInstanceHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateDevicePoolHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateInstanceProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateNetworkProfileHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateTestGridProjectHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateUploadHandler)
  .route('/', XAmzTargetDeviceFarm20150623UpdateVPCEConfigurationHandler)

export default app
