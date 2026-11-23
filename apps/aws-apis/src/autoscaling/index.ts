import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAttachInstancesRoute,
  getActionAttachLoadBalancersRoute,
  getActionAttachLoadBalancerTargetGroupsRoute,
  getActionAttachTrafficSourcesRoute,
  getActionBatchDeleteScheduledActionRoute,
  getActionBatchPutScheduledUpdateGroupActionRoute,
  getActionCancelInstanceRefreshRoute,
  getActionCompleteLifecycleActionRoute,
  getActionCreateAutoScalingGroupRoute,
  getActionCreateLaunchConfigurationRoute,
  getActionCreateOrUpdateTagsRoute,
  getActionDeleteAutoScalingGroupRoute,
  getActionDeleteLaunchConfigurationRoute,
  getActionDeleteLifecycleHookRoute,
  getActionDeleteNotificationConfigurationRoute,
  getActionDeletePolicyRoute,
  getActionDeleteScheduledActionRoute,
  getActionDeleteTagsRoute,
  getActionDeleteWarmPoolRoute,
  getActionDescribeAccountLimitsRoute,
  getActionDescribeAdjustmentTypesRoute,
  getActionDescribeAutoScalingGroupsRoute,
  getActionDescribeAutoScalingInstancesRoute,
  getActionDescribeAutoScalingNotificationTypesRoute,
  getActionDescribeInstanceRefreshesRoute,
  getActionDescribeLaunchConfigurationsRoute,
  getActionDescribeLifecycleHooksRoute,
  getActionDescribeLifecycleHookTypesRoute,
  getActionDescribeLoadBalancersRoute,
  getActionDescribeLoadBalancerTargetGroupsRoute,
  getActionDescribeMetricCollectionTypesRoute,
  getActionDescribeNotificationConfigurationsRoute,
  getActionDescribePoliciesRoute,
  getActionDescribeScalingActivitiesRoute,
  getActionDescribeScalingProcessTypesRoute,
  getActionDescribeScheduledActionsRoute,
  getActionDescribeTagsRoute,
  getActionDescribeTerminationPolicyTypesRoute,
  getActionDescribeTrafficSourcesRoute,
  getActionDescribeWarmPoolRoute,
  getActionDetachInstancesRoute,
  getActionDetachLoadBalancersRoute,
  getActionDetachLoadBalancerTargetGroupsRoute,
  getActionDetachTrafficSourcesRoute,
  getActionDisableMetricsCollectionRoute,
  getActionEnableMetricsCollectionRoute,
  getActionEnterStandbyRoute,
  getActionExecutePolicyRoute,
  getActionExitStandbyRoute,
  getActionGetPredictiveScalingForecastRoute,
  getActionPutLifecycleHookRoute,
  getActionPutNotificationConfigurationRoute,
  getActionPutScalingPolicyRoute,
  getActionPutScheduledUpdateGroupActionRoute,
  getActionPutWarmPoolRoute,
  getActionRecordLifecycleActionHeartbeatRoute,
  getActionResumeProcessesRoute,
  getActionRollbackInstanceRefreshRoute,
  getActionSetDesiredCapacityRoute,
  getActionSetInstanceHealthRoute,
  getActionSetInstanceProtectionRoute,
  getActionStartInstanceRefreshRoute,
  getActionSuspendProcessesRoute,
  getActionTerminateInstanceInAutoScalingGroupRoute,
  getActionUpdateAutoScalingGroupRoute,
  postActionAttachInstancesRoute,
  postActionAttachLoadBalancersRoute,
  postActionAttachLoadBalancerTargetGroupsRoute,
  postActionAttachTrafficSourcesRoute,
  postActionBatchDeleteScheduledActionRoute,
  postActionBatchPutScheduledUpdateGroupActionRoute,
  postActionCancelInstanceRefreshRoute,
  postActionCompleteLifecycleActionRoute,
  postActionCreateAutoScalingGroupRoute,
  postActionCreateLaunchConfigurationRoute,
  postActionCreateOrUpdateTagsRoute,
  postActionDeleteAutoScalingGroupRoute,
  postActionDeleteLaunchConfigurationRoute,
  postActionDeleteLifecycleHookRoute,
  postActionDeleteNotificationConfigurationRoute,
  postActionDeletePolicyRoute,
  postActionDeleteScheduledActionRoute,
  postActionDeleteTagsRoute,
  postActionDeleteWarmPoolRoute,
  postActionDescribeAccountLimitsRoute,
  postActionDescribeAdjustmentTypesRoute,
  postActionDescribeAutoScalingGroupsRoute,
  postActionDescribeAutoScalingInstancesRoute,
  postActionDescribeAutoScalingNotificationTypesRoute,
  postActionDescribeInstanceRefreshesRoute,
  postActionDescribeLaunchConfigurationsRoute,
  postActionDescribeLifecycleHooksRoute,
  postActionDescribeLifecycleHookTypesRoute,
  postActionDescribeLoadBalancersRoute,
  postActionDescribeLoadBalancerTargetGroupsRoute,
  postActionDescribeMetricCollectionTypesRoute,
  postActionDescribeNotificationConfigurationsRoute,
  postActionDescribePoliciesRoute,
  postActionDescribeScalingActivitiesRoute,
  postActionDescribeScalingProcessTypesRoute,
  postActionDescribeScheduledActionsRoute,
  postActionDescribeTagsRoute,
  postActionDescribeTerminationPolicyTypesRoute,
  postActionDescribeTrafficSourcesRoute,
  postActionDescribeWarmPoolRoute,
  postActionDetachInstancesRoute,
  postActionDetachLoadBalancersRoute,
  postActionDetachLoadBalancerTargetGroupsRoute,
  postActionDetachTrafficSourcesRoute,
  postActionDisableMetricsCollectionRoute,
  postActionEnableMetricsCollectionRoute,
  postActionEnterStandbyRoute,
  postActionExecutePolicyRoute,
  postActionExitStandbyRoute,
  postActionGetPredictiveScalingForecastRoute,
  postActionPutLifecycleHookRoute,
  postActionPutNotificationConfigurationRoute,
  postActionPutScalingPolicyRoute,
  postActionPutScheduledUpdateGroupActionRoute,
  postActionPutWarmPoolRoute,
  postActionRecordLifecycleActionHeartbeatRoute,
  postActionResumeProcessesRoute,
  postActionRollbackInstanceRefreshRoute,
  postActionSetDesiredCapacityRoute,
  postActionSetInstanceHealthRoute,
  postActionSetInstanceProtectionRoute,
  postActionStartInstanceRefreshRoute,
  postActionSuspendProcessesRoute,
  postActionTerminateInstanceInAutoScalingGroupRoute,
  postActionUpdateAutoScalingGroupRoute,
} from './routes'
import {
  getActionAttachInstancesRouteHandler,
  getActionAttachLoadBalancersRouteHandler,
  getActionAttachLoadBalancerTargetGroupsRouteHandler,
  getActionAttachTrafficSourcesRouteHandler,
  getActionBatchDeleteScheduledActionRouteHandler,
  getActionBatchPutScheduledUpdateGroupActionRouteHandler,
  getActionCancelInstanceRefreshRouteHandler,
  getActionCompleteLifecycleActionRouteHandler,
  getActionCreateAutoScalingGroupRouteHandler,
  getActionCreateLaunchConfigurationRouteHandler,
  getActionCreateOrUpdateTagsRouteHandler,
  getActionDeleteAutoScalingGroupRouteHandler,
  getActionDeleteLaunchConfigurationRouteHandler,
  getActionDeleteLifecycleHookRouteHandler,
  getActionDeleteNotificationConfigurationRouteHandler,
  getActionDeletePolicyRouteHandler,
  getActionDeleteScheduledActionRouteHandler,
  getActionDeleteTagsRouteHandler,
  getActionDeleteWarmPoolRouteHandler,
  getActionDescribeAccountLimitsRouteHandler,
  getActionDescribeAdjustmentTypesRouteHandler,
  getActionDescribeAutoScalingGroupsRouteHandler,
  getActionDescribeAutoScalingInstancesRouteHandler,
  getActionDescribeAutoScalingNotificationTypesRouteHandler,
  getActionDescribeInstanceRefreshesRouteHandler,
  getActionDescribeLaunchConfigurationsRouteHandler,
  getActionDescribeLifecycleHooksRouteHandler,
  getActionDescribeLifecycleHookTypesRouteHandler,
  getActionDescribeLoadBalancersRouteHandler,
  getActionDescribeLoadBalancerTargetGroupsRouteHandler,
  getActionDescribeMetricCollectionTypesRouteHandler,
  getActionDescribeNotificationConfigurationsRouteHandler,
  getActionDescribePoliciesRouteHandler,
  getActionDescribeScalingActivitiesRouteHandler,
  getActionDescribeScalingProcessTypesRouteHandler,
  getActionDescribeScheduledActionsRouteHandler,
  getActionDescribeTagsRouteHandler,
  getActionDescribeTerminationPolicyTypesRouteHandler,
  getActionDescribeTrafficSourcesRouteHandler,
  getActionDescribeWarmPoolRouteHandler,
  getActionDetachInstancesRouteHandler,
  getActionDetachLoadBalancersRouteHandler,
  getActionDetachLoadBalancerTargetGroupsRouteHandler,
  getActionDetachTrafficSourcesRouteHandler,
  getActionDisableMetricsCollectionRouteHandler,
  getActionEnableMetricsCollectionRouteHandler,
  getActionEnterStandbyRouteHandler,
  getActionExecutePolicyRouteHandler,
  getActionExitStandbyRouteHandler,
  getActionGetPredictiveScalingForecastRouteHandler,
  getActionPutLifecycleHookRouteHandler,
  getActionPutNotificationConfigurationRouteHandler,
  getActionPutScalingPolicyRouteHandler,
  getActionPutScheduledUpdateGroupActionRouteHandler,
  getActionPutWarmPoolRouteHandler,
  getActionRecordLifecycleActionHeartbeatRouteHandler,
  getActionResumeProcessesRouteHandler,
  getActionRollbackInstanceRefreshRouteHandler,
  getActionSetDesiredCapacityRouteHandler,
  getActionSetInstanceHealthRouteHandler,
  getActionSetInstanceProtectionRouteHandler,
  getActionStartInstanceRefreshRouteHandler,
  getActionSuspendProcessesRouteHandler,
  getActionTerminateInstanceInAutoScalingGroupRouteHandler,
  getActionUpdateAutoScalingGroupRouteHandler,
  postActionAttachInstancesRouteHandler,
  postActionAttachLoadBalancersRouteHandler,
  postActionAttachLoadBalancerTargetGroupsRouteHandler,
  postActionAttachTrafficSourcesRouteHandler,
  postActionBatchDeleteScheduledActionRouteHandler,
  postActionBatchPutScheduledUpdateGroupActionRouteHandler,
  postActionCancelInstanceRefreshRouteHandler,
  postActionCompleteLifecycleActionRouteHandler,
  postActionCreateAutoScalingGroupRouteHandler,
  postActionCreateLaunchConfigurationRouteHandler,
  postActionCreateOrUpdateTagsRouteHandler,
  postActionDeleteAutoScalingGroupRouteHandler,
  postActionDeleteLaunchConfigurationRouteHandler,
  postActionDeleteLifecycleHookRouteHandler,
  postActionDeleteNotificationConfigurationRouteHandler,
  postActionDeletePolicyRouteHandler,
  postActionDeleteScheduledActionRouteHandler,
  postActionDeleteTagsRouteHandler,
  postActionDeleteWarmPoolRouteHandler,
  postActionDescribeAccountLimitsRouteHandler,
  postActionDescribeAdjustmentTypesRouteHandler,
  postActionDescribeAutoScalingGroupsRouteHandler,
  postActionDescribeAutoScalingInstancesRouteHandler,
  postActionDescribeAutoScalingNotificationTypesRouteHandler,
  postActionDescribeInstanceRefreshesRouteHandler,
  postActionDescribeLaunchConfigurationsRouteHandler,
  postActionDescribeLifecycleHooksRouteHandler,
  postActionDescribeLifecycleHookTypesRouteHandler,
  postActionDescribeLoadBalancersRouteHandler,
  postActionDescribeLoadBalancerTargetGroupsRouteHandler,
  postActionDescribeMetricCollectionTypesRouteHandler,
  postActionDescribeNotificationConfigurationsRouteHandler,
  postActionDescribePoliciesRouteHandler,
  postActionDescribeScalingActivitiesRouteHandler,
  postActionDescribeScalingProcessTypesRouteHandler,
  postActionDescribeScheduledActionsRouteHandler,
  postActionDescribeTagsRouteHandler,
  postActionDescribeTerminationPolicyTypesRouteHandler,
  postActionDescribeTrafficSourcesRouteHandler,
  postActionDescribeWarmPoolRouteHandler,
  postActionDetachInstancesRouteHandler,
  postActionDetachLoadBalancersRouteHandler,
  postActionDetachLoadBalancerTargetGroupsRouteHandler,
  postActionDetachTrafficSourcesRouteHandler,
  postActionDisableMetricsCollectionRouteHandler,
  postActionEnableMetricsCollectionRouteHandler,
  postActionEnterStandbyRouteHandler,
  postActionExecutePolicyRouteHandler,
  postActionExitStandbyRouteHandler,
  postActionGetPredictiveScalingForecastRouteHandler,
  postActionPutLifecycleHookRouteHandler,
  postActionPutNotificationConfigurationRouteHandler,
  postActionPutScalingPolicyRouteHandler,
  postActionPutScheduledUpdateGroupActionRouteHandler,
  postActionPutWarmPoolRouteHandler,
  postActionRecordLifecycleActionHeartbeatRouteHandler,
  postActionResumeProcessesRouteHandler,
  postActionRollbackInstanceRefreshRouteHandler,
  postActionSetDesiredCapacityRouteHandler,
  postActionSetInstanceHealthRouteHandler,
  postActionSetInstanceProtectionRouteHandler,
  postActionStartInstanceRefreshRouteHandler,
  postActionSuspendProcessesRouteHandler,
  postActionTerminateInstanceInAutoScalingGroupRouteHandler,
  postActionUpdateAutoScalingGroupRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAttachInstancesRoute, getActionAttachInstancesRouteHandler)
  .openapi(postActionAttachInstancesRoute, postActionAttachInstancesRouteHandler)
  .openapi(
    getActionAttachLoadBalancerTargetGroupsRoute,
    getActionAttachLoadBalancerTargetGroupsRouteHandler,
  )
  .openapi(
    postActionAttachLoadBalancerTargetGroupsRoute,
    postActionAttachLoadBalancerTargetGroupsRouteHandler,
  )
  .openapi(getActionAttachLoadBalancersRoute, getActionAttachLoadBalancersRouteHandler)
  .openapi(postActionAttachLoadBalancersRoute, postActionAttachLoadBalancersRouteHandler)
  .openapi(getActionAttachTrafficSourcesRoute, getActionAttachTrafficSourcesRouteHandler)
  .openapi(postActionAttachTrafficSourcesRoute, postActionAttachTrafficSourcesRouteHandler)
  .openapi(
    getActionBatchDeleteScheduledActionRoute,
    getActionBatchDeleteScheduledActionRouteHandler,
  )
  .openapi(
    postActionBatchDeleteScheduledActionRoute,
    postActionBatchDeleteScheduledActionRouteHandler,
  )
  .openapi(
    getActionBatchPutScheduledUpdateGroupActionRoute,
    getActionBatchPutScheduledUpdateGroupActionRouteHandler,
  )
  .openapi(
    postActionBatchPutScheduledUpdateGroupActionRoute,
    postActionBatchPutScheduledUpdateGroupActionRouteHandler,
  )
  .openapi(getActionCancelInstanceRefreshRoute, getActionCancelInstanceRefreshRouteHandler)
  .openapi(postActionCancelInstanceRefreshRoute, postActionCancelInstanceRefreshRouteHandler)
  .openapi(getActionCompleteLifecycleActionRoute, getActionCompleteLifecycleActionRouteHandler)
  .openapi(postActionCompleteLifecycleActionRoute, postActionCompleteLifecycleActionRouteHandler)
  .openapi(getActionCreateAutoScalingGroupRoute, getActionCreateAutoScalingGroupRouteHandler)
  .openapi(postActionCreateAutoScalingGroupRoute, postActionCreateAutoScalingGroupRouteHandler)
  .openapi(getActionCreateLaunchConfigurationRoute, getActionCreateLaunchConfigurationRouteHandler)
  .openapi(
    postActionCreateLaunchConfigurationRoute,
    postActionCreateLaunchConfigurationRouteHandler,
  )
  .openapi(getActionCreateOrUpdateTagsRoute, getActionCreateOrUpdateTagsRouteHandler)
  .openapi(postActionCreateOrUpdateTagsRoute, postActionCreateOrUpdateTagsRouteHandler)
  .openapi(getActionDeleteAutoScalingGroupRoute, getActionDeleteAutoScalingGroupRouteHandler)
  .openapi(postActionDeleteAutoScalingGroupRoute, postActionDeleteAutoScalingGroupRouteHandler)
  .openapi(getActionDeleteLaunchConfigurationRoute, getActionDeleteLaunchConfigurationRouteHandler)
  .openapi(
    postActionDeleteLaunchConfigurationRoute,
    postActionDeleteLaunchConfigurationRouteHandler,
  )
  .openapi(getActionDeleteLifecycleHookRoute, getActionDeleteLifecycleHookRouteHandler)
  .openapi(postActionDeleteLifecycleHookRoute, postActionDeleteLifecycleHookRouteHandler)
  .openapi(
    getActionDeleteNotificationConfigurationRoute,
    getActionDeleteNotificationConfigurationRouteHandler,
  )
  .openapi(
    postActionDeleteNotificationConfigurationRoute,
    postActionDeleteNotificationConfigurationRouteHandler,
  )
  .openapi(getActionDeletePolicyRoute, getActionDeletePolicyRouteHandler)
  .openapi(postActionDeletePolicyRoute, postActionDeletePolicyRouteHandler)
  .openapi(getActionDeleteScheduledActionRoute, getActionDeleteScheduledActionRouteHandler)
  .openapi(postActionDeleteScheduledActionRoute, postActionDeleteScheduledActionRouteHandler)
  .openapi(getActionDeleteTagsRoute, getActionDeleteTagsRouteHandler)
  .openapi(postActionDeleteTagsRoute, postActionDeleteTagsRouteHandler)
  .openapi(getActionDeleteWarmPoolRoute, getActionDeleteWarmPoolRouteHandler)
  .openapi(postActionDeleteWarmPoolRoute, postActionDeleteWarmPoolRouteHandler)
  .openapi(getActionDescribeAccountLimitsRoute, getActionDescribeAccountLimitsRouteHandler)
  .openapi(postActionDescribeAccountLimitsRoute, postActionDescribeAccountLimitsRouteHandler)
  .openapi(getActionDescribeAdjustmentTypesRoute, getActionDescribeAdjustmentTypesRouteHandler)
  .openapi(postActionDescribeAdjustmentTypesRoute, postActionDescribeAdjustmentTypesRouteHandler)
  .openapi(getActionDescribeAutoScalingGroupsRoute, getActionDescribeAutoScalingGroupsRouteHandler)
  .openapi(
    postActionDescribeAutoScalingGroupsRoute,
    postActionDescribeAutoScalingGroupsRouteHandler,
  )
  .openapi(
    getActionDescribeAutoScalingInstancesRoute,
    getActionDescribeAutoScalingInstancesRouteHandler,
  )
  .openapi(
    postActionDescribeAutoScalingInstancesRoute,
    postActionDescribeAutoScalingInstancesRouteHandler,
  )
  .openapi(
    getActionDescribeAutoScalingNotificationTypesRoute,
    getActionDescribeAutoScalingNotificationTypesRouteHandler,
  )
  .openapi(
    postActionDescribeAutoScalingNotificationTypesRoute,
    postActionDescribeAutoScalingNotificationTypesRouteHandler,
  )
  .openapi(getActionDescribeInstanceRefreshesRoute, getActionDescribeInstanceRefreshesRouteHandler)
  .openapi(
    postActionDescribeInstanceRefreshesRoute,
    postActionDescribeInstanceRefreshesRouteHandler,
  )
  .openapi(
    getActionDescribeLaunchConfigurationsRoute,
    getActionDescribeLaunchConfigurationsRouteHandler,
  )
  .openapi(
    postActionDescribeLaunchConfigurationsRoute,
    postActionDescribeLaunchConfigurationsRouteHandler,
  )
  .openapi(
    getActionDescribeLifecycleHookTypesRoute,
    getActionDescribeLifecycleHookTypesRouteHandler,
  )
  .openapi(
    postActionDescribeLifecycleHookTypesRoute,
    postActionDescribeLifecycleHookTypesRouteHandler,
  )
  .openapi(getActionDescribeLifecycleHooksRoute, getActionDescribeLifecycleHooksRouteHandler)
  .openapi(postActionDescribeLifecycleHooksRoute, postActionDescribeLifecycleHooksRouteHandler)
  .openapi(
    getActionDescribeLoadBalancerTargetGroupsRoute,
    getActionDescribeLoadBalancerTargetGroupsRouteHandler,
  )
  .openapi(
    postActionDescribeLoadBalancerTargetGroupsRoute,
    postActionDescribeLoadBalancerTargetGroupsRouteHandler,
  )
  .openapi(getActionDescribeLoadBalancersRoute, getActionDescribeLoadBalancersRouteHandler)
  .openapi(postActionDescribeLoadBalancersRoute, postActionDescribeLoadBalancersRouteHandler)
  .openapi(
    getActionDescribeMetricCollectionTypesRoute,
    getActionDescribeMetricCollectionTypesRouteHandler,
  )
  .openapi(
    postActionDescribeMetricCollectionTypesRoute,
    postActionDescribeMetricCollectionTypesRouteHandler,
  )
  .openapi(
    getActionDescribeNotificationConfigurationsRoute,
    getActionDescribeNotificationConfigurationsRouteHandler,
  )
  .openapi(
    postActionDescribeNotificationConfigurationsRoute,
    postActionDescribeNotificationConfigurationsRouteHandler,
  )
  .openapi(getActionDescribePoliciesRoute, getActionDescribePoliciesRouteHandler)
  .openapi(postActionDescribePoliciesRoute, postActionDescribePoliciesRouteHandler)
  .openapi(getActionDescribeScalingActivitiesRoute, getActionDescribeScalingActivitiesRouteHandler)
  .openapi(
    postActionDescribeScalingActivitiesRoute,
    postActionDescribeScalingActivitiesRouteHandler,
  )
  .openapi(
    getActionDescribeScalingProcessTypesRoute,
    getActionDescribeScalingProcessTypesRouteHandler,
  )
  .openapi(
    postActionDescribeScalingProcessTypesRoute,
    postActionDescribeScalingProcessTypesRouteHandler,
  )
  .openapi(getActionDescribeScheduledActionsRoute, getActionDescribeScheduledActionsRouteHandler)
  .openapi(postActionDescribeScheduledActionsRoute, postActionDescribeScheduledActionsRouteHandler)
  .openapi(getActionDescribeTagsRoute, getActionDescribeTagsRouteHandler)
  .openapi(postActionDescribeTagsRoute, postActionDescribeTagsRouteHandler)
  .openapi(
    getActionDescribeTerminationPolicyTypesRoute,
    getActionDescribeTerminationPolicyTypesRouteHandler,
  )
  .openapi(
    postActionDescribeTerminationPolicyTypesRoute,
    postActionDescribeTerminationPolicyTypesRouteHandler,
  )
  .openapi(getActionDescribeTrafficSourcesRoute, getActionDescribeTrafficSourcesRouteHandler)
  .openapi(postActionDescribeTrafficSourcesRoute, postActionDescribeTrafficSourcesRouteHandler)
  .openapi(getActionDescribeWarmPoolRoute, getActionDescribeWarmPoolRouteHandler)
  .openapi(postActionDescribeWarmPoolRoute, postActionDescribeWarmPoolRouteHandler)
  .openapi(getActionDetachInstancesRoute, getActionDetachInstancesRouteHandler)
  .openapi(postActionDetachInstancesRoute, postActionDetachInstancesRouteHandler)
  .openapi(
    getActionDetachLoadBalancerTargetGroupsRoute,
    getActionDetachLoadBalancerTargetGroupsRouteHandler,
  )
  .openapi(
    postActionDetachLoadBalancerTargetGroupsRoute,
    postActionDetachLoadBalancerTargetGroupsRouteHandler,
  )
  .openapi(getActionDetachLoadBalancersRoute, getActionDetachLoadBalancersRouteHandler)
  .openapi(postActionDetachLoadBalancersRoute, postActionDetachLoadBalancersRouteHandler)
  .openapi(getActionDetachTrafficSourcesRoute, getActionDetachTrafficSourcesRouteHandler)
  .openapi(postActionDetachTrafficSourcesRoute, postActionDetachTrafficSourcesRouteHandler)
  .openapi(getActionDisableMetricsCollectionRoute, getActionDisableMetricsCollectionRouteHandler)
  .openapi(postActionDisableMetricsCollectionRoute, postActionDisableMetricsCollectionRouteHandler)
  .openapi(getActionEnableMetricsCollectionRoute, getActionEnableMetricsCollectionRouteHandler)
  .openapi(postActionEnableMetricsCollectionRoute, postActionEnableMetricsCollectionRouteHandler)
  .openapi(getActionEnterStandbyRoute, getActionEnterStandbyRouteHandler)
  .openapi(postActionEnterStandbyRoute, postActionEnterStandbyRouteHandler)
  .openapi(getActionExecutePolicyRoute, getActionExecutePolicyRouteHandler)
  .openapi(postActionExecutePolicyRoute, postActionExecutePolicyRouteHandler)
  .openapi(getActionExitStandbyRoute, getActionExitStandbyRouteHandler)
  .openapi(postActionExitStandbyRoute, postActionExitStandbyRouteHandler)
  .openapi(
    getActionGetPredictiveScalingForecastRoute,
    getActionGetPredictiveScalingForecastRouteHandler,
  )
  .openapi(
    postActionGetPredictiveScalingForecastRoute,
    postActionGetPredictiveScalingForecastRouteHandler,
  )
  .openapi(getActionPutLifecycleHookRoute, getActionPutLifecycleHookRouteHandler)
  .openapi(postActionPutLifecycleHookRoute, postActionPutLifecycleHookRouteHandler)
  .openapi(
    getActionPutNotificationConfigurationRoute,
    getActionPutNotificationConfigurationRouteHandler,
  )
  .openapi(
    postActionPutNotificationConfigurationRoute,
    postActionPutNotificationConfigurationRouteHandler,
  )
  .openapi(getActionPutScalingPolicyRoute, getActionPutScalingPolicyRouteHandler)
  .openapi(postActionPutScalingPolicyRoute, postActionPutScalingPolicyRouteHandler)
  .openapi(
    getActionPutScheduledUpdateGroupActionRoute,
    getActionPutScheduledUpdateGroupActionRouteHandler,
  )
  .openapi(
    postActionPutScheduledUpdateGroupActionRoute,
    postActionPutScheduledUpdateGroupActionRouteHandler,
  )
  .openapi(getActionPutWarmPoolRoute, getActionPutWarmPoolRouteHandler)
  .openapi(postActionPutWarmPoolRoute, postActionPutWarmPoolRouteHandler)
  .openapi(
    getActionRecordLifecycleActionHeartbeatRoute,
    getActionRecordLifecycleActionHeartbeatRouteHandler,
  )
  .openapi(
    postActionRecordLifecycleActionHeartbeatRoute,
    postActionRecordLifecycleActionHeartbeatRouteHandler,
  )
  .openapi(getActionResumeProcessesRoute, getActionResumeProcessesRouteHandler)
  .openapi(postActionResumeProcessesRoute, postActionResumeProcessesRouteHandler)
  .openapi(getActionRollbackInstanceRefreshRoute, getActionRollbackInstanceRefreshRouteHandler)
  .openapi(postActionRollbackInstanceRefreshRoute, postActionRollbackInstanceRefreshRouteHandler)
  .openapi(getActionSetDesiredCapacityRoute, getActionSetDesiredCapacityRouteHandler)
  .openapi(postActionSetDesiredCapacityRoute, postActionSetDesiredCapacityRouteHandler)
  .openapi(getActionSetInstanceHealthRoute, getActionSetInstanceHealthRouteHandler)
  .openapi(postActionSetInstanceHealthRoute, postActionSetInstanceHealthRouteHandler)
  .openapi(getActionSetInstanceProtectionRoute, getActionSetInstanceProtectionRouteHandler)
  .openapi(postActionSetInstanceProtectionRoute, postActionSetInstanceProtectionRouteHandler)
  .openapi(getActionStartInstanceRefreshRoute, getActionStartInstanceRefreshRouteHandler)
  .openapi(postActionStartInstanceRefreshRoute, postActionStartInstanceRefreshRouteHandler)
  .openapi(getActionSuspendProcessesRoute, getActionSuspendProcessesRouteHandler)
  .openapi(postActionSuspendProcessesRoute, postActionSuspendProcessesRouteHandler)
  .openapi(
    getActionTerminateInstanceInAutoScalingGroupRoute,
    getActionTerminateInstanceInAutoScalingGroupRouteHandler,
  )
  .openapi(
    postActionTerminateInstanceInAutoScalingGroupRoute,
    postActionTerminateInstanceInAutoScalingGroupRouteHandler,
  )
  .openapi(getActionUpdateAutoScalingGroupRoute, getActionUpdateAutoScalingGroupRouteHandler)
  .openapi(postActionUpdateAutoScalingGroupRoute, postActionUpdateAutoScalingGroupRouteHandler)

export default app
