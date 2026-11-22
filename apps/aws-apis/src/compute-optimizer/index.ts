import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesHandler,
  XAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsHandler,
  XAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsHandler,
  XAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsHandler,
  XAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesHandler,
  XAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationHandler,
  XAmzTargetComputeOptimizerServiceGetEnrollmentStatusHandler,
  XAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsHandler,
  XAmzTargetComputeOptimizerServiceGetRecommendationPreferencesHandler,
  XAmzTargetComputeOptimizerServiceGetRecommendationSummariesHandler,
  XAmzTargetComputeOptimizerServicePutRecommendationPreferencesHandler,
  XAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesHandler)
  .route('/', XAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetEnrollmentStatusHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetRecommendationPreferencesHandler)
  .route('/', XAmzTargetComputeOptimizerServiceGetRecommendationSummariesHandler)
  .route('/', XAmzTargetComputeOptimizerServicePutRecommendationPreferencesHandler)
  .route('/', XAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusHandler)

export default app
