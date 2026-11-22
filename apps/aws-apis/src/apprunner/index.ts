import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAppRunnerAssociateCustomDomainHandler,
  XAmzTargetAppRunnerCreateAutoScalingConfigurationHandler,
  XAmzTargetAppRunnerCreateConnectionHandler,
  XAmzTargetAppRunnerCreateObservabilityConfigurationHandler,
  XAmzTargetAppRunnerCreateServiceHandler,
  XAmzTargetAppRunnerCreateVpcConnectorHandler,
  XAmzTargetAppRunnerCreateVpcIngressConnectionHandler,
  XAmzTargetAppRunnerDeleteAutoScalingConfigurationHandler,
  XAmzTargetAppRunnerDeleteConnectionHandler,
  XAmzTargetAppRunnerDeleteObservabilityConfigurationHandler,
  XAmzTargetAppRunnerDeleteServiceHandler,
  XAmzTargetAppRunnerDeleteVpcConnectorHandler,
  XAmzTargetAppRunnerDeleteVpcIngressConnectionHandler,
  XAmzTargetAppRunnerDescribeAutoScalingConfigurationHandler,
  XAmzTargetAppRunnerDescribeCustomDomainsHandler,
  XAmzTargetAppRunnerDescribeObservabilityConfigurationHandler,
  XAmzTargetAppRunnerDescribeServiceHandler,
  XAmzTargetAppRunnerDescribeVpcConnectorHandler,
  XAmzTargetAppRunnerDescribeVpcIngressConnectionHandler,
  XAmzTargetAppRunnerDisassociateCustomDomainHandler,
  XAmzTargetAppRunnerListAutoScalingConfigurationsHandler,
  XAmzTargetAppRunnerListConnectionsHandler,
  XAmzTargetAppRunnerListObservabilityConfigurationsHandler,
  XAmzTargetAppRunnerListOperationsHandler,
  XAmzTargetAppRunnerListServicesHandler,
  XAmzTargetAppRunnerListTagsForResourceHandler,
  XAmzTargetAppRunnerListVpcConnectorsHandler,
  XAmzTargetAppRunnerListVpcIngressConnectionsHandler,
  XAmzTargetAppRunnerPauseServiceHandler,
  XAmzTargetAppRunnerResumeServiceHandler,
  XAmzTargetAppRunnerStartDeploymentHandler,
  XAmzTargetAppRunnerTagResourceHandler,
  XAmzTargetAppRunnerUntagResourceHandler,
  XAmzTargetAppRunnerUpdateServiceHandler,
  XAmzTargetAppRunnerUpdateVpcIngressConnectionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAppRunnerAssociateCustomDomainHandler)
  .route('/', XAmzTargetAppRunnerCreateAutoScalingConfigurationHandler)
  .route('/', XAmzTargetAppRunnerCreateConnectionHandler)
  .route('/', XAmzTargetAppRunnerCreateObservabilityConfigurationHandler)
  .route('/', XAmzTargetAppRunnerCreateServiceHandler)
  .route('/', XAmzTargetAppRunnerCreateVpcConnectorHandler)
  .route('/', XAmzTargetAppRunnerCreateVpcIngressConnectionHandler)
  .route('/', XAmzTargetAppRunnerDeleteAutoScalingConfigurationHandler)
  .route('/', XAmzTargetAppRunnerDeleteConnectionHandler)
  .route('/', XAmzTargetAppRunnerDeleteObservabilityConfigurationHandler)
  .route('/', XAmzTargetAppRunnerDeleteServiceHandler)
  .route('/', XAmzTargetAppRunnerDeleteVpcConnectorHandler)
  .route('/', XAmzTargetAppRunnerDeleteVpcIngressConnectionHandler)
  .route('/', XAmzTargetAppRunnerDescribeAutoScalingConfigurationHandler)
  .route('/', XAmzTargetAppRunnerDescribeCustomDomainsHandler)
  .route('/', XAmzTargetAppRunnerDescribeObservabilityConfigurationHandler)
  .route('/', XAmzTargetAppRunnerDescribeServiceHandler)
  .route('/', XAmzTargetAppRunnerDescribeVpcConnectorHandler)
  .route('/', XAmzTargetAppRunnerDescribeVpcIngressConnectionHandler)
  .route('/', XAmzTargetAppRunnerDisassociateCustomDomainHandler)
  .route('/', XAmzTargetAppRunnerListAutoScalingConfigurationsHandler)
  .route('/', XAmzTargetAppRunnerListConnectionsHandler)
  .route('/', XAmzTargetAppRunnerListObservabilityConfigurationsHandler)
  .route('/', XAmzTargetAppRunnerListOperationsHandler)
  .route('/', XAmzTargetAppRunnerListServicesHandler)
  .route('/', XAmzTargetAppRunnerListTagsForResourceHandler)
  .route('/', XAmzTargetAppRunnerListVpcConnectorsHandler)
  .route('/', XAmzTargetAppRunnerListVpcIngressConnectionsHandler)
  .route('/', XAmzTargetAppRunnerPauseServiceHandler)
  .route('/', XAmzTargetAppRunnerResumeServiceHandler)
  .route('/', XAmzTargetAppRunnerStartDeploymentHandler)
  .route('/', XAmzTargetAppRunnerTagResourceHandler)
  .route('/', XAmzTargetAppRunnerUntagResourceHandler)
  .route('/', XAmzTargetAppRunnerUpdateServiceHandler)
  .route('/', XAmzTargetAppRunnerUpdateVpcIngressConnectionHandler)

export default app
