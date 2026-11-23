import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsHandler,
  xAmzTargetGlobalAcceleratorV20180706AddEndpointsHandler,
  xAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrHandler,
  xAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficHandler,
  xAmzTargetGlobalAcceleratorV20180706CreateAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706CreateListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706DeleteListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficHandler,
  xAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706DescribeListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706ListAcceleratorsHandler,
  xAmzTargetGlobalAcceleratorV20180706ListByoipCidrsHandler,
  xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsHandler,
  xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsHandler,
  xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersHandler,
  xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationHandler,
  xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsHandler,
  xAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsHandler,
  xAmzTargetGlobalAcceleratorV20180706ListListenersHandler,
  xAmzTargetGlobalAcceleratorV20180706ListTagsForResourceHandler,
  xAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrHandler,
  xAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsHandler,
  xAmzTargetGlobalAcceleratorV20180706RemoveEndpointsHandler,
  xAmzTargetGlobalAcceleratorV20180706TagResourceHandler,
  xAmzTargetGlobalAcceleratorV20180706UntagResourceHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupHandler,
  xAmzTargetGlobalAcceleratorV20180706UpdateListenerHandler,
  xAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706AddEndpointsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706CreateAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706CreateListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeleteListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706DescribeListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListAcceleratorsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListByoipCidrsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListListenersHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ListTagsForResourceHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706RemoveEndpointsHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706TagResourceHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UntagResourceHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706UpdateListenerHandler)
  .route('/', xAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrHandler)

export default app
