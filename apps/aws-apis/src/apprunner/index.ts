import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAppRunnerAssociateCustomDomainHandler,
  xAmzTargetAppRunnerCreateAutoScalingConfigurationHandler,
  xAmzTargetAppRunnerCreateConnectionHandler,
  xAmzTargetAppRunnerCreateObservabilityConfigurationHandler,
  xAmzTargetAppRunnerCreateServiceHandler,
  xAmzTargetAppRunnerCreateVpcConnectorHandler,
  xAmzTargetAppRunnerCreateVpcIngressConnectionHandler,
  xAmzTargetAppRunnerDeleteAutoScalingConfigurationHandler,
  xAmzTargetAppRunnerDeleteConnectionHandler,
  xAmzTargetAppRunnerDeleteObservabilityConfigurationHandler,
  xAmzTargetAppRunnerDeleteServiceHandler,
  xAmzTargetAppRunnerDeleteVpcConnectorHandler,
  xAmzTargetAppRunnerDeleteVpcIngressConnectionHandler,
  xAmzTargetAppRunnerDescribeAutoScalingConfigurationHandler,
  xAmzTargetAppRunnerDescribeCustomDomainsHandler,
  xAmzTargetAppRunnerDescribeObservabilityConfigurationHandler,
  xAmzTargetAppRunnerDescribeServiceHandler,
  xAmzTargetAppRunnerDescribeVpcConnectorHandler,
  xAmzTargetAppRunnerDescribeVpcIngressConnectionHandler,
  xAmzTargetAppRunnerDisassociateCustomDomainHandler,
  xAmzTargetAppRunnerListAutoScalingConfigurationsHandler,
  xAmzTargetAppRunnerListConnectionsHandler,
  xAmzTargetAppRunnerListObservabilityConfigurationsHandler,
  xAmzTargetAppRunnerListOperationsHandler,
  xAmzTargetAppRunnerListServicesHandler,
  xAmzTargetAppRunnerListTagsForResourceHandler,
  xAmzTargetAppRunnerListVpcConnectorsHandler,
  xAmzTargetAppRunnerListVpcIngressConnectionsHandler,
  xAmzTargetAppRunnerPauseServiceHandler,
  xAmzTargetAppRunnerResumeServiceHandler,
  xAmzTargetAppRunnerStartDeploymentHandler,
  xAmzTargetAppRunnerTagResourceHandler,
  xAmzTargetAppRunnerUntagResourceHandler,
  xAmzTargetAppRunnerUpdateServiceHandler,
  xAmzTargetAppRunnerUpdateVpcIngressConnectionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAppRunnerAssociateCustomDomainHandler)
  .route('/', xAmzTargetAppRunnerCreateAutoScalingConfigurationHandler)
  .route('/', xAmzTargetAppRunnerCreateConnectionHandler)
  .route('/', xAmzTargetAppRunnerCreateObservabilityConfigurationHandler)
  .route('/', xAmzTargetAppRunnerCreateServiceHandler)
  .route('/', xAmzTargetAppRunnerCreateVpcConnectorHandler)
  .route('/', xAmzTargetAppRunnerCreateVpcIngressConnectionHandler)
  .route('/', xAmzTargetAppRunnerDeleteAutoScalingConfigurationHandler)
  .route('/', xAmzTargetAppRunnerDeleteConnectionHandler)
  .route('/', xAmzTargetAppRunnerDeleteObservabilityConfigurationHandler)
  .route('/', xAmzTargetAppRunnerDeleteServiceHandler)
  .route('/', xAmzTargetAppRunnerDeleteVpcConnectorHandler)
  .route('/', xAmzTargetAppRunnerDeleteVpcIngressConnectionHandler)
  .route('/', xAmzTargetAppRunnerDescribeAutoScalingConfigurationHandler)
  .route('/', xAmzTargetAppRunnerDescribeCustomDomainsHandler)
  .route('/', xAmzTargetAppRunnerDescribeObservabilityConfigurationHandler)
  .route('/', xAmzTargetAppRunnerDescribeServiceHandler)
  .route('/', xAmzTargetAppRunnerDescribeVpcConnectorHandler)
  .route('/', xAmzTargetAppRunnerDescribeVpcIngressConnectionHandler)
  .route('/', xAmzTargetAppRunnerDisassociateCustomDomainHandler)
  .route('/', xAmzTargetAppRunnerListAutoScalingConfigurationsHandler)
  .route('/', xAmzTargetAppRunnerListConnectionsHandler)
  .route('/', xAmzTargetAppRunnerListObservabilityConfigurationsHandler)
  .route('/', xAmzTargetAppRunnerListOperationsHandler)
  .route('/', xAmzTargetAppRunnerListServicesHandler)
  .route('/', xAmzTargetAppRunnerListTagsForResourceHandler)
  .route('/', xAmzTargetAppRunnerListVpcConnectorsHandler)
  .route('/', xAmzTargetAppRunnerListVpcIngressConnectionsHandler)
  .route('/', xAmzTargetAppRunnerPauseServiceHandler)
  .route('/', xAmzTargetAppRunnerResumeServiceHandler)
  .route('/', xAmzTargetAppRunnerStartDeploymentHandler)
  .route('/', xAmzTargetAppRunnerTagResourceHandler)
  .route('/', xAmzTargetAppRunnerUntagResourceHandler)
  .route('/', xAmzTargetAppRunnerUpdateServiceHandler)
  .route('/', xAmzTargetAppRunnerUpdateVpcIngressConnectionHandler)

export default app
