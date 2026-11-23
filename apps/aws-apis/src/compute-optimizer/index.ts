import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesHandler,
  xAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsHandler,
  xAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceExportEbsVolumeRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceExportEc2InstanceRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceExportEcsServiceRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceGetEbsVolumeRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceGetEc2InstanceRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceGetEc2RecommendationProjectedMetricsHandler,
  xAmzTargetComputeOptimizerServiceGetEcsServiceRecommendationProjectedMetricsHandler,
  xAmzTargetComputeOptimizerServiceGetEcsServiceRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesHandler,
  xAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationHandler,
  xAmzTargetComputeOptimizerServiceGetEnrollmentStatusHandler,
  xAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsHandler,
  xAmzTargetComputeOptimizerServiceGetRecommendationPreferencesHandler,
  xAmzTargetComputeOptimizerServiceGetRecommendationSummariesHandler,
  xAmzTargetComputeOptimizerServicePutRecommendationPreferencesHandler,
  xAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesHandler)
  .route('/', xAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceExportEbsVolumeRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceExportEc2InstanceRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceExportEcsServiceRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEbsVolumeRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEc2InstanceRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEc2RecommendationProjectedMetricsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEcsServiceRecommendationProjectedMetricsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEcsServiceRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEnrollmentStatusHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetRecommendationPreferencesHandler)
  .route('/', xAmzTargetComputeOptimizerServiceGetRecommendationSummariesHandler)
  .route('/', xAmzTargetComputeOptimizerServicePutRecommendationPreferencesHandler)
  .route('/', xAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusHandler)

export default app
