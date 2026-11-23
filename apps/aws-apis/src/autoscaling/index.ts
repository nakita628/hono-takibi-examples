import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAttachInstancesHandler,
  actionAttachLoadBalancersHandler,
  actionAttachLoadBalancerTargetGroupsHandler,
  actionAttachTrafficSourcesHandler,
  actionBatchDeleteScheduledActionHandler,
  actionBatchPutScheduledUpdateGroupActionHandler,
  actionCancelInstanceRefreshHandler,
  actionCompleteLifecycleActionHandler,
  actionCreateAutoScalingGroupHandler,
  actionCreateLaunchConfigurationHandler,
  actionCreateOrUpdateTagsHandler,
  actionDeleteAutoScalingGroupHandler,
  actionDeleteLaunchConfigurationHandler,
  actionDeleteLifecycleHookHandler,
  actionDeleteNotificationConfigurationHandler,
  actionDeletePolicyHandler,
  actionDeleteScheduledActionHandler,
  actionDeleteTagsHandler,
  actionDeleteWarmPoolHandler,
  actionDescribeAccountLimitsHandler,
  actionDescribeAdjustmentTypesHandler,
  actionDescribeAutoScalingGroupsHandler,
  actionDescribeAutoScalingInstancesHandler,
  actionDescribeAutoScalingNotificationTypesHandler,
  actionDescribeInstanceRefreshesHandler,
  actionDescribeLaunchConfigurationsHandler,
  actionDescribeLifecycleHooksHandler,
  actionDescribeLifecycleHookTypesHandler,
  actionDescribeLoadBalancersHandler,
  actionDescribeLoadBalancerTargetGroupsHandler,
  actionDescribeMetricCollectionTypesHandler,
  actionDescribeNotificationConfigurationsHandler,
  actionDescribePoliciesHandler,
  actionDescribeScalingActivitiesHandler,
  actionDescribeScalingProcessTypesHandler,
  actionDescribeScheduledActionsHandler,
  actionDescribeTagsHandler,
  actionDescribeTerminationPolicyTypesHandler,
  actionDescribeTrafficSourcesHandler,
  actionDescribeWarmPoolHandler,
  actionDetachInstancesHandler,
  actionDetachLoadBalancersHandler,
  actionDetachLoadBalancerTargetGroupsHandler,
  actionDetachTrafficSourcesHandler,
  actionDisableMetricsCollectionHandler,
  actionEnableMetricsCollectionHandler,
  actionEnterStandbyHandler,
  actionExecutePolicyHandler,
  actionExitStandbyHandler,
  actionGetPredictiveScalingForecastHandler,
  actionPutLifecycleHookHandler,
  actionPutNotificationConfigurationHandler,
  actionPutScalingPolicyHandler,
  actionPutScheduledUpdateGroupActionHandler,
  actionPutWarmPoolHandler,
  actionRecordLifecycleActionHeartbeatHandler,
  actionResumeProcessesHandler,
  actionRollbackInstanceRefreshHandler,
  actionSetDesiredCapacityHandler,
  actionSetInstanceHealthHandler,
  actionSetInstanceProtectionHandler,
  actionStartInstanceRefreshHandler,
  actionSuspendProcessesHandler,
  actionTerminateInstanceInAutoScalingGroupHandler,
  actionUpdateAutoScalingGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAttachInstancesHandler)
  .route('/', actionAttachLoadBalancerTargetGroupsHandler)
  .route('/', actionAttachLoadBalancersHandler)
  .route('/', actionAttachTrafficSourcesHandler)
  .route('/', actionBatchDeleteScheduledActionHandler)
  .route('/', actionBatchPutScheduledUpdateGroupActionHandler)
  .route('/', actionCancelInstanceRefreshHandler)
  .route('/', actionCompleteLifecycleActionHandler)
  .route('/', actionCreateAutoScalingGroupHandler)
  .route('/', actionCreateLaunchConfigurationHandler)
  .route('/', actionCreateOrUpdateTagsHandler)
  .route('/', actionDeleteAutoScalingGroupHandler)
  .route('/', actionDeleteLaunchConfigurationHandler)
  .route('/', actionDeleteLifecycleHookHandler)
  .route('/', actionDeleteNotificationConfigurationHandler)
  .route('/', actionDeletePolicyHandler)
  .route('/', actionDeleteScheduledActionHandler)
  .route('/', actionDeleteTagsHandler)
  .route('/', actionDeleteWarmPoolHandler)
  .route('/', actionDescribeAccountLimitsHandler)
  .route('/', actionDescribeAdjustmentTypesHandler)
  .route('/', actionDescribeAutoScalingGroupsHandler)
  .route('/', actionDescribeAutoScalingInstancesHandler)
  .route('/', actionDescribeAutoScalingNotificationTypesHandler)
  .route('/', actionDescribeInstanceRefreshesHandler)
  .route('/', actionDescribeLaunchConfigurationsHandler)
  .route('/', actionDescribeLifecycleHookTypesHandler)
  .route('/', actionDescribeLifecycleHooksHandler)
  .route('/', actionDescribeLoadBalancerTargetGroupsHandler)
  .route('/', actionDescribeLoadBalancersHandler)
  .route('/', actionDescribeMetricCollectionTypesHandler)
  .route('/', actionDescribeNotificationConfigurationsHandler)
  .route('/', actionDescribePoliciesHandler)
  .route('/', actionDescribeScalingActivitiesHandler)
  .route('/', actionDescribeScalingProcessTypesHandler)
  .route('/', actionDescribeScheduledActionsHandler)
  .route('/', actionDescribeTagsHandler)
  .route('/', actionDescribeTerminationPolicyTypesHandler)
  .route('/', actionDescribeTrafficSourcesHandler)
  .route('/', actionDescribeWarmPoolHandler)
  .route('/', actionDetachInstancesHandler)
  .route('/', actionDetachLoadBalancerTargetGroupsHandler)
  .route('/', actionDetachLoadBalancersHandler)
  .route('/', actionDetachTrafficSourcesHandler)
  .route('/', actionDisableMetricsCollectionHandler)
  .route('/', actionEnableMetricsCollectionHandler)
  .route('/', actionEnterStandbyHandler)
  .route('/', actionExecutePolicyHandler)
  .route('/', actionExitStandbyHandler)
  .route('/', actionGetPredictiveScalingForecastHandler)
  .route('/', actionPutLifecycleHookHandler)
  .route('/', actionPutNotificationConfigurationHandler)
  .route('/', actionPutScalingPolicyHandler)
  .route('/', actionPutScheduledUpdateGroupActionHandler)
  .route('/', actionPutWarmPoolHandler)
  .route('/', actionRecordLifecycleActionHeartbeatHandler)
  .route('/', actionResumeProcessesHandler)
  .route('/', actionRollbackInstanceRefreshHandler)
  .route('/', actionSetDesiredCapacityHandler)
  .route('/', actionSetInstanceHealthHandler)
  .route('/', actionSetInstanceProtectionHandler)
  .route('/', actionStartInstanceRefreshHandler)
  .route('/', actionSuspendProcessesHandler)
  .route('/', actionTerminateInstanceInAutoScalingGroupHandler)
  .route('/', actionUpdateAutoScalingGroupHandler)

export default app
