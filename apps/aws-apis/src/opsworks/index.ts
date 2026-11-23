import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetOpsWorks20130218AssignInstanceHandler,
  xAmzTargetOpsWorks20130218AssignVolumeHandler,
  xAmzTargetOpsWorks20130218AssociateElasticIpHandler,
  xAmzTargetOpsWorks20130218AttachElasticLoadBalancerHandler,
  xAmzTargetOpsWorks20130218CloneStackHandler,
  xAmzTargetOpsWorks20130218CreateAppHandler,
  xAmzTargetOpsWorks20130218CreateDeploymentHandler,
  xAmzTargetOpsWorks20130218CreateInstanceHandler,
  xAmzTargetOpsWorks20130218CreateLayerHandler,
  xAmzTargetOpsWorks20130218CreateStackHandler,
  xAmzTargetOpsWorks20130218CreateUserProfileHandler,
  xAmzTargetOpsWorks20130218DeleteAppHandler,
  xAmzTargetOpsWorks20130218DeleteInstanceHandler,
  xAmzTargetOpsWorks20130218DeleteLayerHandler,
  xAmzTargetOpsWorks20130218DeleteStackHandler,
  xAmzTargetOpsWorks20130218DeleteUserProfileHandler,
  xAmzTargetOpsWorks20130218DeregisterEcsClusterHandler,
  xAmzTargetOpsWorks20130218DeregisterElasticIpHandler,
  xAmzTargetOpsWorks20130218DeregisterInstanceHandler,
  xAmzTargetOpsWorks20130218DeregisterRdsDbInstanceHandler,
  xAmzTargetOpsWorks20130218DeregisterVolumeHandler,
  xAmzTargetOpsWorks20130218DescribeAgentVersionsHandler,
  xAmzTargetOpsWorks20130218DescribeAppsHandler,
  xAmzTargetOpsWorks20130218DescribeCommandsHandler,
  xAmzTargetOpsWorks20130218DescribeDeploymentsHandler,
  xAmzTargetOpsWorks20130218DescribeEcsClustersHandler,
  xAmzTargetOpsWorks20130218DescribeElasticIpsHandler,
  xAmzTargetOpsWorks20130218DescribeElasticLoadBalancersHandler,
  xAmzTargetOpsWorks20130218DescribeInstancesHandler,
  xAmzTargetOpsWorks20130218DescribeLayersHandler,
  xAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingHandler,
  xAmzTargetOpsWorks20130218DescribeMyUserProfileHandler,
  xAmzTargetOpsWorks20130218DescribeOperatingSystemsHandler,
  xAmzTargetOpsWorks20130218DescribePermissionsHandler,
  xAmzTargetOpsWorks20130218DescribeRaidArraysHandler,
  xAmzTargetOpsWorks20130218DescribeRdsDbInstancesHandler,
  xAmzTargetOpsWorks20130218DescribeServiceErrorsHandler,
  xAmzTargetOpsWorks20130218DescribeStackProvisioningParametersHandler,
  xAmzTargetOpsWorks20130218DescribeStacksHandler,
  xAmzTargetOpsWorks20130218DescribeStackSummaryHandler,
  xAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingHandler,
  xAmzTargetOpsWorks20130218DescribeUserProfilesHandler,
  xAmzTargetOpsWorks20130218DescribeVolumesHandler,
  xAmzTargetOpsWorks20130218DetachElasticLoadBalancerHandler,
  xAmzTargetOpsWorks20130218DisassociateElasticIpHandler,
  xAmzTargetOpsWorks20130218GetHostnameSuggestionHandler,
  xAmzTargetOpsWorks20130218GrantAccessHandler,
  xAmzTargetOpsWorks20130218ListTagsHandler,
  xAmzTargetOpsWorks20130218RebootInstanceHandler,
  xAmzTargetOpsWorks20130218RegisterEcsClusterHandler,
  xAmzTargetOpsWorks20130218RegisterElasticIpHandler,
  xAmzTargetOpsWorks20130218RegisterInstanceHandler,
  xAmzTargetOpsWorks20130218RegisterRdsDbInstanceHandler,
  xAmzTargetOpsWorks20130218RegisterVolumeHandler,
  xAmzTargetOpsWorks20130218SetLoadBasedAutoScalingHandler,
  xAmzTargetOpsWorks20130218SetPermissionHandler,
  xAmzTargetOpsWorks20130218SetTimeBasedAutoScalingHandler,
  xAmzTargetOpsWorks20130218StartInstanceHandler,
  xAmzTargetOpsWorks20130218StartStackHandler,
  xAmzTargetOpsWorks20130218StopInstanceHandler,
  xAmzTargetOpsWorks20130218StopStackHandler,
  xAmzTargetOpsWorks20130218TagResourceHandler,
  xAmzTargetOpsWorks20130218UnassignInstanceHandler,
  xAmzTargetOpsWorks20130218UnassignVolumeHandler,
  xAmzTargetOpsWorks20130218UntagResourceHandler,
  xAmzTargetOpsWorks20130218UpdateAppHandler,
  xAmzTargetOpsWorks20130218UpdateElasticIpHandler,
  xAmzTargetOpsWorks20130218UpdateInstanceHandler,
  xAmzTargetOpsWorks20130218UpdateLayerHandler,
  xAmzTargetOpsWorks20130218UpdateMyUserProfileHandler,
  xAmzTargetOpsWorks20130218UpdateRdsDbInstanceHandler,
  xAmzTargetOpsWorks20130218UpdateStackHandler,
  xAmzTargetOpsWorks20130218UpdateUserProfileHandler,
  xAmzTargetOpsWorks20130218UpdateVolumeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetOpsWorks20130218AssignInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218AssignVolumeHandler)
  .route('/', xAmzTargetOpsWorks20130218AssociateElasticIpHandler)
  .route('/', xAmzTargetOpsWorks20130218AttachElasticLoadBalancerHandler)
  .route('/', xAmzTargetOpsWorks20130218CloneStackHandler)
  .route('/', xAmzTargetOpsWorks20130218CreateAppHandler)
  .route('/', xAmzTargetOpsWorks20130218CreateDeploymentHandler)
  .route('/', xAmzTargetOpsWorks20130218CreateInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218CreateLayerHandler)
  .route('/', xAmzTargetOpsWorks20130218CreateStackHandler)
  .route('/', xAmzTargetOpsWorks20130218CreateUserProfileHandler)
  .route('/', xAmzTargetOpsWorks20130218DeleteAppHandler)
  .route('/', xAmzTargetOpsWorks20130218DeleteInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218DeleteLayerHandler)
  .route('/', xAmzTargetOpsWorks20130218DeleteStackHandler)
  .route('/', xAmzTargetOpsWorks20130218DeleteUserProfileHandler)
  .route('/', xAmzTargetOpsWorks20130218DeregisterEcsClusterHandler)
  .route('/', xAmzTargetOpsWorks20130218DeregisterElasticIpHandler)
  .route('/', xAmzTargetOpsWorks20130218DeregisterInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218DeregisterRdsDbInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218DeregisterVolumeHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeAgentVersionsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeAppsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeCommandsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeDeploymentsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeEcsClustersHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeElasticIpsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeElasticLoadBalancersHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeInstancesHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeLayersHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeMyUserProfileHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeOperatingSystemsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribePermissionsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeRaidArraysHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeRdsDbInstancesHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeServiceErrorsHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeStackProvisioningParametersHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeStackSummaryHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeStacksHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeUserProfilesHandler)
  .route('/', xAmzTargetOpsWorks20130218DescribeVolumesHandler)
  .route('/', xAmzTargetOpsWorks20130218DetachElasticLoadBalancerHandler)
  .route('/', xAmzTargetOpsWorks20130218DisassociateElasticIpHandler)
  .route('/', xAmzTargetOpsWorks20130218GetHostnameSuggestionHandler)
  .route('/', xAmzTargetOpsWorks20130218GrantAccessHandler)
  .route('/', xAmzTargetOpsWorks20130218ListTagsHandler)
  .route('/', xAmzTargetOpsWorks20130218RebootInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218RegisterEcsClusterHandler)
  .route('/', xAmzTargetOpsWorks20130218RegisterElasticIpHandler)
  .route('/', xAmzTargetOpsWorks20130218RegisterInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218RegisterRdsDbInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218RegisterVolumeHandler)
  .route('/', xAmzTargetOpsWorks20130218SetLoadBasedAutoScalingHandler)
  .route('/', xAmzTargetOpsWorks20130218SetPermissionHandler)
  .route('/', xAmzTargetOpsWorks20130218SetTimeBasedAutoScalingHandler)
  .route('/', xAmzTargetOpsWorks20130218StartInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218StartStackHandler)
  .route('/', xAmzTargetOpsWorks20130218StopInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218StopStackHandler)
  .route('/', xAmzTargetOpsWorks20130218TagResourceHandler)
  .route('/', xAmzTargetOpsWorks20130218UnassignInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218UnassignVolumeHandler)
  .route('/', xAmzTargetOpsWorks20130218UntagResourceHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateAppHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateElasticIpHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateLayerHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateMyUserProfileHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateRdsDbInstanceHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateStackHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateUserProfileHandler)
  .route('/', xAmzTargetOpsWorks20130218UpdateVolumeHandler)

export default app
