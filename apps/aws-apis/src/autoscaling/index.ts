import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAttachInstancesHandler,
  ActionAttachLoadBalancersHandler,
  ActionAttachLoadBalancerTargetGroupsHandler,
  ActionAttachTrafficSourcesHandler,
  ActionBatchDeleteScheduledActionHandler,
  ActionBatchPutScheduledUpdateGroupActionHandler,
  ActionCancelInstanceRefreshHandler,
  ActionCompleteLifecycleActionHandler,
  ActionCreateAutoScalingGroupHandler,
  ActionCreateLaunchConfigurationHandler,
  ActionCreateOrUpdateTagsHandler,
  ActionDeleteAutoScalingGroupHandler,
  ActionDeleteLaunchConfigurationHandler,
  ActionDeleteLifecycleHookHandler,
  ActionDeleteNotificationConfigurationHandler,
  ActionDeletePolicyHandler,
  ActionDeleteScheduledActionHandler,
  ActionDeleteTagsHandler,
  ActionDeleteWarmPoolHandler,
  ActionDescribeAccountLimitsHandler,
  ActionDescribeAdjustmentTypesHandler,
  ActionDescribeAutoScalingGroupsHandler,
  ActionDescribeAutoScalingInstancesHandler,
  ActionDescribeAutoScalingNotificationTypesHandler,
  ActionDescribeInstanceRefreshesHandler,
  ActionDescribeLaunchConfigurationsHandler,
  ActionDescribeLifecycleHooksHandler,
  ActionDescribeLifecycleHookTypesHandler,
  ActionDescribeLoadBalancersHandler,
  ActionDescribeLoadBalancerTargetGroupsHandler,
  ActionDescribeMetricCollectionTypesHandler,
  ActionDescribeNotificationConfigurationsHandler,
  ActionDescribePoliciesHandler,
  ActionDescribeScalingActivitiesHandler,
  ActionDescribeScalingProcessTypesHandler,
  ActionDescribeScheduledActionsHandler,
  ActionDescribeTagsHandler,
  ActionDescribeTerminationPolicyTypesHandler,
  ActionDescribeTrafficSourcesHandler,
  ActionDescribeWarmPoolHandler,
  ActionDetachInstancesHandler,
  ActionDetachLoadBalancersHandler,
  ActionDetachLoadBalancerTargetGroupsHandler,
  ActionDetachTrafficSourcesHandler,
  ActionDisableMetricsCollectionHandler,
  ActionEnableMetricsCollectionHandler,
  ActionEnterStandbyHandler,
  ActionExecutePolicyHandler,
  ActionExitStandbyHandler,
  ActionGetPredictiveScalingForecastHandler,
  ActionPutLifecycleHookHandler,
  ActionPutNotificationConfigurationHandler,
  ActionPutScalingPolicyHandler,
  ActionPutScheduledUpdateGroupActionHandler,
  ActionPutWarmPoolHandler,
  ActionRecordLifecycleActionHeartbeatHandler,
  ActionResumeProcessesHandler,
  ActionRollbackInstanceRefreshHandler,
  ActionSetDesiredCapacityHandler,
  ActionSetInstanceHealthHandler,
  ActionSetInstanceProtectionHandler,
  ActionStartInstanceRefreshHandler,
  ActionSuspendProcessesHandler,
  ActionTerminateInstanceInAutoScalingGroupHandler,
  ActionUpdateAutoScalingGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAttachInstancesHandler)
  .route('/', ActionAttachLoadBalancerTargetGroupsHandler)
  .route('/', ActionAttachLoadBalancersHandler)
  .route('/', ActionAttachTrafficSourcesHandler)
  .route('/', ActionBatchDeleteScheduledActionHandler)
  .route('/', ActionBatchPutScheduledUpdateGroupActionHandler)
  .route('/', ActionCancelInstanceRefreshHandler)
  .route('/', ActionCompleteLifecycleActionHandler)
  .route('/', ActionCreateAutoScalingGroupHandler)
  .route('/', ActionCreateLaunchConfigurationHandler)
  .route('/', ActionCreateOrUpdateTagsHandler)
  .route('/', ActionDeleteAutoScalingGroupHandler)
  .route('/', ActionDeleteLaunchConfigurationHandler)
  .route('/', ActionDeleteLifecycleHookHandler)
  .route('/', ActionDeleteNotificationConfigurationHandler)
  .route('/', ActionDeletePolicyHandler)
  .route('/', ActionDeleteScheduledActionHandler)
  .route('/', ActionDeleteTagsHandler)
  .route('/', ActionDeleteWarmPoolHandler)
  .route('/', ActionDescribeAccountLimitsHandler)
  .route('/', ActionDescribeAdjustmentTypesHandler)
  .route('/', ActionDescribeAutoScalingGroupsHandler)
  .route('/', ActionDescribeAutoScalingInstancesHandler)
  .route('/', ActionDescribeAutoScalingNotificationTypesHandler)
  .route('/', ActionDescribeInstanceRefreshesHandler)
  .route('/', ActionDescribeLaunchConfigurationsHandler)
  .route('/', ActionDescribeLifecycleHookTypesHandler)
  .route('/', ActionDescribeLifecycleHooksHandler)
  .route('/', ActionDescribeLoadBalancerTargetGroupsHandler)
  .route('/', ActionDescribeLoadBalancersHandler)
  .route('/', ActionDescribeMetricCollectionTypesHandler)
  .route('/', ActionDescribeNotificationConfigurationsHandler)
  .route('/', ActionDescribePoliciesHandler)
  .route('/', ActionDescribeScalingActivitiesHandler)
  .route('/', ActionDescribeScalingProcessTypesHandler)
  .route('/', ActionDescribeScheduledActionsHandler)
  .route('/', ActionDescribeTagsHandler)
  .route('/', ActionDescribeTerminationPolicyTypesHandler)
  .route('/', ActionDescribeTrafficSourcesHandler)
  .route('/', ActionDescribeWarmPoolHandler)
  .route('/', ActionDetachInstancesHandler)
  .route('/', ActionDetachLoadBalancerTargetGroupsHandler)
  .route('/', ActionDetachLoadBalancersHandler)
  .route('/', ActionDetachTrafficSourcesHandler)
  .route('/', ActionDisableMetricsCollectionHandler)
  .route('/', ActionEnableMetricsCollectionHandler)
  .route('/', ActionEnterStandbyHandler)
  .route('/', ActionExecutePolicyHandler)
  .route('/', ActionExitStandbyHandler)
  .route('/', ActionGetPredictiveScalingForecastHandler)
  .route('/', ActionPutLifecycleHookHandler)
  .route('/', ActionPutNotificationConfigurationHandler)
  .route('/', ActionPutScalingPolicyHandler)
  .route('/', ActionPutScheduledUpdateGroupActionHandler)
  .route('/', ActionPutWarmPoolHandler)
  .route('/', ActionRecordLifecycleActionHeartbeatHandler)
  .route('/', ActionResumeProcessesHandler)
  .route('/', ActionRollbackInstanceRefreshHandler)
  .route('/', ActionSetDesiredCapacityHandler)
  .route('/', ActionSetInstanceHealthHandler)
  .route('/', ActionSetInstanceProtectionHandler)
  .route('/', ActionStartInstanceRefreshHandler)
  .route('/', ActionSuspendProcessesHandler)
  .route('/', ActionTerminateInstanceInAutoScalingGroupHandler)
  .route('/', ActionUpdateAutoScalingGroupHandler)

export default app
