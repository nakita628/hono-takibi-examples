import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetOpsWorks20130218AssignInstanceHandler,
  XAmzTargetOpsWorks20130218AssignVolumeHandler,
  XAmzTargetOpsWorks20130218AssociateElasticIpHandler,
  XAmzTargetOpsWorks20130218AttachElasticLoadBalancerHandler,
  XAmzTargetOpsWorks20130218CloneStackHandler,
  XAmzTargetOpsWorks20130218CreateAppHandler,
  XAmzTargetOpsWorks20130218CreateDeploymentHandler,
  XAmzTargetOpsWorks20130218CreateInstanceHandler,
  XAmzTargetOpsWorks20130218CreateLayerHandler,
  XAmzTargetOpsWorks20130218CreateStackHandler,
  XAmzTargetOpsWorks20130218CreateUserProfileHandler,
  XAmzTargetOpsWorks20130218DeleteAppHandler,
  XAmzTargetOpsWorks20130218DeleteInstanceHandler,
  XAmzTargetOpsWorks20130218DeleteLayerHandler,
  XAmzTargetOpsWorks20130218DeleteStackHandler,
  XAmzTargetOpsWorks20130218DeleteUserProfileHandler,
  XAmzTargetOpsWorks20130218DeregisterEcsClusterHandler,
  XAmzTargetOpsWorks20130218DeregisterElasticIpHandler,
  XAmzTargetOpsWorks20130218DeregisterInstanceHandler,
  XAmzTargetOpsWorks20130218DeregisterRdsDbInstanceHandler,
  XAmzTargetOpsWorks20130218DeregisterVolumeHandler,
  XAmzTargetOpsWorks20130218DescribeAgentVersionsHandler,
  XAmzTargetOpsWorks20130218DescribeAppsHandler,
  XAmzTargetOpsWorks20130218DescribeCommandsHandler,
  XAmzTargetOpsWorks20130218DescribeDeploymentsHandler,
  XAmzTargetOpsWorks20130218DescribeEcsClustersHandler,
  XAmzTargetOpsWorks20130218DescribeElasticIpsHandler,
  XAmzTargetOpsWorks20130218DescribeElasticLoadBalancersHandler,
  XAmzTargetOpsWorks20130218DescribeInstancesHandler,
  XAmzTargetOpsWorks20130218DescribeLayersHandler,
  XAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingHandler,
  XAmzTargetOpsWorks20130218DescribeMyUserProfileHandler,
  XAmzTargetOpsWorks20130218DescribeOperatingSystemsHandler,
  XAmzTargetOpsWorks20130218DescribePermissionsHandler,
  XAmzTargetOpsWorks20130218DescribeRaidArraysHandler,
  XAmzTargetOpsWorks20130218DescribeRdsDbInstancesHandler,
  XAmzTargetOpsWorks20130218DescribeServiceErrorsHandler,
  XAmzTargetOpsWorks20130218DescribeStackProvisioningParametersHandler,
  XAmzTargetOpsWorks20130218DescribeStacksHandler,
  XAmzTargetOpsWorks20130218DescribeStackSummaryHandler,
  XAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingHandler,
  XAmzTargetOpsWorks20130218DescribeUserProfilesHandler,
  XAmzTargetOpsWorks20130218DescribeVolumesHandler,
  XAmzTargetOpsWorks20130218DetachElasticLoadBalancerHandler,
  XAmzTargetOpsWorks20130218DisassociateElasticIpHandler,
  XAmzTargetOpsWorks20130218GetHostnameSuggestionHandler,
  XAmzTargetOpsWorks20130218GrantAccessHandler,
  XAmzTargetOpsWorks20130218ListTagsHandler,
  XAmzTargetOpsWorks20130218RebootInstanceHandler,
  XAmzTargetOpsWorks20130218RegisterEcsClusterHandler,
  XAmzTargetOpsWorks20130218RegisterElasticIpHandler,
  XAmzTargetOpsWorks20130218RegisterInstanceHandler,
  XAmzTargetOpsWorks20130218RegisterRdsDbInstanceHandler,
  XAmzTargetOpsWorks20130218RegisterVolumeHandler,
  XAmzTargetOpsWorks20130218SetLoadBasedAutoScalingHandler,
  XAmzTargetOpsWorks20130218SetPermissionHandler,
  XAmzTargetOpsWorks20130218SetTimeBasedAutoScalingHandler,
  XAmzTargetOpsWorks20130218StartInstanceHandler,
  XAmzTargetOpsWorks20130218StartStackHandler,
  XAmzTargetOpsWorks20130218StopInstanceHandler,
  XAmzTargetOpsWorks20130218StopStackHandler,
  XAmzTargetOpsWorks20130218TagResourceHandler,
  XAmzTargetOpsWorks20130218UnassignInstanceHandler,
  XAmzTargetOpsWorks20130218UnassignVolumeHandler,
  XAmzTargetOpsWorks20130218UntagResourceHandler,
  XAmzTargetOpsWorks20130218UpdateAppHandler,
  XAmzTargetOpsWorks20130218UpdateElasticIpHandler,
  XAmzTargetOpsWorks20130218UpdateInstanceHandler,
  XAmzTargetOpsWorks20130218UpdateLayerHandler,
  XAmzTargetOpsWorks20130218UpdateMyUserProfileHandler,
  XAmzTargetOpsWorks20130218UpdateRdsDbInstanceHandler,
  XAmzTargetOpsWorks20130218UpdateStackHandler,
  XAmzTargetOpsWorks20130218UpdateUserProfileHandler,
  XAmzTargetOpsWorks20130218UpdateVolumeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetOpsWorks20130218AssignInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218AssignVolumeHandler)
  .route('/', XAmzTargetOpsWorks20130218AssociateElasticIpHandler)
  .route('/', XAmzTargetOpsWorks20130218AttachElasticLoadBalancerHandler)
  .route('/', XAmzTargetOpsWorks20130218CloneStackHandler)
  .route('/', XAmzTargetOpsWorks20130218CreateAppHandler)
  .route('/', XAmzTargetOpsWorks20130218CreateDeploymentHandler)
  .route('/', XAmzTargetOpsWorks20130218CreateInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218CreateLayerHandler)
  .route('/', XAmzTargetOpsWorks20130218CreateStackHandler)
  .route('/', XAmzTargetOpsWorks20130218CreateUserProfileHandler)
  .route('/', XAmzTargetOpsWorks20130218DeleteAppHandler)
  .route('/', XAmzTargetOpsWorks20130218DeleteInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218DeleteLayerHandler)
  .route('/', XAmzTargetOpsWorks20130218DeleteStackHandler)
  .route('/', XAmzTargetOpsWorks20130218DeleteUserProfileHandler)
  .route('/', XAmzTargetOpsWorks20130218DeregisterEcsClusterHandler)
  .route('/', XAmzTargetOpsWorks20130218DeregisterElasticIpHandler)
  .route('/', XAmzTargetOpsWorks20130218DeregisterInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218DeregisterRdsDbInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218DeregisterVolumeHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeAgentVersionsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeAppsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeCommandsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeDeploymentsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeEcsClustersHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeElasticIpsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeElasticLoadBalancersHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeInstancesHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeLayersHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeLoadBasedAutoScalingHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeMyUserProfileHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeOperatingSystemsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribePermissionsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeRaidArraysHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeRdsDbInstancesHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeServiceErrorsHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeStackProvisioningParametersHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeStackSummaryHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeStacksHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeTimeBasedAutoScalingHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeUserProfilesHandler)
  .route('/', XAmzTargetOpsWorks20130218DescribeVolumesHandler)
  .route('/', XAmzTargetOpsWorks20130218DetachElasticLoadBalancerHandler)
  .route('/', XAmzTargetOpsWorks20130218DisassociateElasticIpHandler)
  .route('/', XAmzTargetOpsWorks20130218GetHostnameSuggestionHandler)
  .route('/', XAmzTargetOpsWorks20130218GrantAccessHandler)
  .route('/', XAmzTargetOpsWorks20130218ListTagsHandler)
  .route('/', XAmzTargetOpsWorks20130218RebootInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218RegisterEcsClusterHandler)
  .route('/', XAmzTargetOpsWorks20130218RegisterElasticIpHandler)
  .route('/', XAmzTargetOpsWorks20130218RegisterInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218RegisterRdsDbInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218RegisterVolumeHandler)
  .route('/', XAmzTargetOpsWorks20130218SetLoadBasedAutoScalingHandler)
  .route('/', XAmzTargetOpsWorks20130218SetPermissionHandler)
  .route('/', XAmzTargetOpsWorks20130218SetTimeBasedAutoScalingHandler)
  .route('/', XAmzTargetOpsWorks20130218StartInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218StartStackHandler)
  .route('/', XAmzTargetOpsWorks20130218StopInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218StopStackHandler)
  .route('/', XAmzTargetOpsWorks20130218TagResourceHandler)
  .route('/', XAmzTargetOpsWorks20130218UnassignInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218UnassignVolumeHandler)
  .route('/', XAmzTargetOpsWorks20130218UntagResourceHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateAppHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateElasticIpHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateLayerHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateMyUserProfileHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateRdsDbInstanceHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateStackHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateUserProfileHandler)
  .route('/', XAmzTargetOpsWorks20130218UpdateVolumeHandler)

export default app
