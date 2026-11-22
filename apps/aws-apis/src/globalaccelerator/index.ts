import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsHandler,
  XAmzTargetGlobalAcceleratorV20180706AddEndpointsHandler,
  XAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrHandler,
  XAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficHandler,
  XAmzTargetGlobalAcceleratorV20180706CreateAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706CreateListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706DeleteListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficHandler,
  XAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706DescribeListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706ListAcceleratorsHandler,
  XAmzTargetGlobalAcceleratorV20180706ListByoipCidrsHandler,
  XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsHandler,
  XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsHandler,
  XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersHandler,
  XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationHandler,
  XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsHandler,
  XAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsHandler,
  XAmzTargetGlobalAcceleratorV20180706ListListenersHandler,
  XAmzTargetGlobalAcceleratorV20180706ListTagsForResourceHandler,
  XAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrHandler,
  XAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsHandler,
  XAmzTargetGlobalAcceleratorV20180706RemoveEndpointsHandler,
  XAmzTargetGlobalAcceleratorV20180706TagResourceHandler,
  XAmzTargetGlobalAcceleratorV20180706UntagResourceHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupHandler,
  XAmzTargetGlobalAcceleratorV20180706UpdateListenerHandler,
  XAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpointsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706AddEndpointsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidrHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTrafficHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706CreateAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706CreateEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706CreateListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeleteAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeleteListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTrafficHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidrHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributesHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributesHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706DescribeListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListAcceleratorsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListByoipCidrsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAcceleratorsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroupsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListenersHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestinationHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListEndpointGroupsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListListenersHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ListTagsForResourceHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidrHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpointsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706RemoveEndpointsHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706TagResourceHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UntagResourceHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributesHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroupHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706UpdateListenerHandler)
  .route('/', XAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidrHandler)

export default app
