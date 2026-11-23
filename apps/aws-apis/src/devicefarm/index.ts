import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetDeviceFarm20150623CreateDevicePoolHandler,
  xAmzTargetDeviceFarm20150623CreateInstanceProfileHandler,
  xAmzTargetDeviceFarm20150623CreateNetworkProfileHandler,
  xAmzTargetDeviceFarm20150623CreateProjectHandler,
  xAmzTargetDeviceFarm20150623CreateRemoteAccessSessionHandler,
  xAmzTargetDeviceFarm20150623CreateTestGridProjectHandler,
  xAmzTargetDeviceFarm20150623CreateTestGridUrlHandler,
  xAmzTargetDeviceFarm20150623CreateUploadHandler,
  xAmzTargetDeviceFarm20150623CreateVpceConfigurationHandler,
  xAmzTargetDeviceFarm20150623DeleteDevicePoolHandler,
  xAmzTargetDeviceFarm20150623DeleteInstanceProfileHandler,
  xAmzTargetDeviceFarm20150623DeleteNetworkProfileHandler,
  xAmzTargetDeviceFarm20150623DeleteProjectHandler,
  xAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionHandler,
  xAmzTargetDeviceFarm20150623DeleteRunHandler,
  xAmzTargetDeviceFarm20150623DeleteTestGridProjectHandler,
  xAmzTargetDeviceFarm20150623DeleteUploadHandler,
  xAmzTargetDeviceFarm20150623DeleteVpceConfigurationHandler,
  xAmzTargetDeviceFarm20150623GetAccountSettingsHandler,
  xAmzTargetDeviceFarm20150623GetDeviceHandler,
  xAmzTargetDeviceFarm20150623GetDeviceInstanceHandler,
  xAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityHandler,
  xAmzTargetDeviceFarm20150623GetDevicePoolHandler,
  xAmzTargetDeviceFarm20150623GetInstanceProfileHandler,
  xAmzTargetDeviceFarm20150623GetJobHandler,
  xAmzTargetDeviceFarm20150623GetNetworkProfileHandler,
  xAmzTargetDeviceFarm20150623GetOfferingStatusHandler,
  xAmzTargetDeviceFarm20150623GetProjectHandler,
  xAmzTargetDeviceFarm20150623GetRemoteAccessSessionHandler,
  xAmzTargetDeviceFarm20150623GetRunHandler,
  xAmzTargetDeviceFarm20150623GetSuiteHandler,
  xAmzTargetDeviceFarm20150623GetTestGridProjectHandler,
  xAmzTargetDeviceFarm20150623GetTestGridSessionHandler,
  xAmzTargetDeviceFarm20150623GetTestHandler,
  xAmzTargetDeviceFarm20150623GetUploadHandler,
  xAmzTargetDeviceFarm20150623GetVpceConfigurationHandler,
  xAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionHandler,
  xAmzTargetDeviceFarm20150623ListArtifactsHandler,
  xAmzTargetDeviceFarm20150623ListDeviceInstancesHandler,
  xAmzTargetDeviceFarm20150623ListDevicePoolsHandler,
  xAmzTargetDeviceFarm20150623ListDevicesHandler,
  xAmzTargetDeviceFarm20150623ListInstanceProfilesHandler,
  xAmzTargetDeviceFarm20150623ListJobsHandler,
  xAmzTargetDeviceFarm20150623ListNetworkProfilesHandler,
  xAmzTargetDeviceFarm20150623ListOfferingPromotionsHandler,
  xAmzTargetDeviceFarm20150623ListOfferingsHandler,
  xAmzTargetDeviceFarm20150623ListOfferingTransactionsHandler,
  xAmzTargetDeviceFarm20150623ListProjectsHandler,
  xAmzTargetDeviceFarm20150623ListRemoteAccessSessionsHandler,
  xAmzTargetDeviceFarm20150623ListRunsHandler,
  xAmzTargetDeviceFarm20150623ListSamplesHandler,
  xAmzTargetDeviceFarm20150623ListSuitesHandler,
  xAmzTargetDeviceFarm20150623ListTagsForResourceHandler,
  xAmzTargetDeviceFarm20150623ListTestGridProjectsHandler,
  xAmzTargetDeviceFarm20150623ListTestGridSessionActionsHandler,
  xAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsHandler,
  xAmzTargetDeviceFarm20150623ListTestGridSessionsHandler,
  xAmzTargetDeviceFarm20150623ListTestsHandler,
  xAmzTargetDeviceFarm20150623ListUniqueProblemsHandler,
  xAmzTargetDeviceFarm20150623ListUploadsHandler,
  xAmzTargetDeviceFarm20150623ListVpceConfigurationsHandler,
  xAmzTargetDeviceFarm20150623PurchaseOfferingHandler,
  xAmzTargetDeviceFarm20150623RenewOfferingHandler,
  xAmzTargetDeviceFarm20150623ScheduleRunHandler,
  xAmzTargetDeviceFarm20150623StopJobHandler,
  xAmzTargetDeviceFarm20150623StopRemoteAccessSessionHandler,
  xAmzTargetDeviceFarm20150623StopRunHandler,
  xAmzTargetDeviceFarm20150623TagResourceHandler,
  xAmzTargetDeviceFarm20150623UntagResourceHandler,
  xAmzTargetDeviceFarm20150623UpdateDeviceInstanceHandler,
  xAmzTargetDeviceFarm20150623UpdateDevicePoolHandler,
  xAmzTargetDeviceFarm20150623UpdateInstanceProfileHandler,
  xAmzTargetDeviceFarm20150623UpdateNetworkProfileHandler,
  xAmzTargetDeviceFarm20150623UpdateProjectHandler,
  xAmzTargetDeviceFarm20150623UpdateTestGridProjectHandler,
  xAmzTargetDeviceFarm20150623UpdateUploadHandler,
  xAmzTargetDeviceFarm20150623UpdateVpceConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetDeviceFarm20150623CreateDevicePoolHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateInstanceProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateNetworkProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateRemoteAccessSessionHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateTestGridProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateTestGridUrlHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateUploadHandler)
  .route('/', xAmzTargetDeviceFarm20150623CreateVpceConfigurationHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteDevicePoolHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteInstanceProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteNetworkProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteRemoteAccessSessionHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteRunHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteTestGridProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteUploadHandler)
  .route('/', xAmzTargetDeviceFarm20150623DeleteVpceConfigurationHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetAccountSettingsHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetDeviceHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetDeviceInstanceHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetDevicePoolHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetDevicePoolCompatibilityHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetInstanceProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetJobHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetNetworkProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetOfferingStatusHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetRemoteAccessSessionHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetRunHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetSuiteHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetTestHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetTestGridProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetTestGridSessionHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetUploadHandler)
  .route('/', xAmzTargetDeviceFarm20150623GetVpceConfigurationHandler)
  .route('/', xAmzTargetDeviceFarm20150623InstallToRemoteAccessSessionHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListArtifactsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListDeviceInstancesHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListDevicePoolsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListDevicesHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListInstanceProfilesHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListJobsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListNetworkProfilesHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListOfferingPromotionsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListOfferingTransactionsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListOfferingsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListProjectsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListRemoteAccessSessionsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListRunsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListSamplesHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListSuitesHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListTagsForResourceHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListTestGridProjectsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListTestGridSessionActionsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListTestGridSessionArtifactsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListTestGridSessionsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListTestsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListUniqueProblemsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListUploadsHandler)
  .route('/', xAmzTargetDeviceFarm20150623ListVpceConfigurationsHandler)
  .route('/', xAmzTargetDeviceFarm20150623PurchaseOfferingHandler)
  .route('/', xAmzTargetDeviceFarm20150623RenewOfferingHandler)
  .route('/', xAmzTargetDeviceFarm20150623ScheduleRunHandler)
  .route('/', xAmzTargetDeviceFarm20150623StopJobHandler)
  .route('/', xAmzTargetDeviceFarm20150623StopRemoteAccessSessionHandler)
  .route('/', xAmzTargetDeviceFarm20150623StopRunHandler)
  .route('/', xAmzTargetDeviceFarm20150623TagResourceHandler)
  .route('/', xAmzTargetDeviceFarm20150623UntagResourceHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateDeviceInstanceHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateDevicePoolHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateInstanceProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateNetworkProfileHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateTestGridProjectHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateUploadHandler)
  .route('/', xAmzTargetDeviceFarm20150623UpdateVpceConfigurationHandler)

export default app
