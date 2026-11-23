import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314CreateServiceHandler,
  xAmzTargetRoute53AutoNamingV20170314DeleteNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314DeleteServiceHandler,
  xAmzTargetRoute53AutoNamingV20170314DeregisterInstanceHandler,
  xAmzTargetRoute53AutoNamingV20170314DiscoverInstancesHandler,
  xAmzTargetRoute53AutoNamingV20170314GetInstanceHandler,
  xAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusHandler,
  xAmzTargetRoute53AutoNamingV20170314GetNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314GetOperationHandler,
  xAmzTargetRoute53AutoNamingV20170314GetServiceHandler,
  xAmzTargetRoute53AutoNamingV20170314ListInstancesHandler,
  xAmzTargetRoute53AutoNamingV20170314ListNamespacesHandler,
  xAmzTargetRoute53AutoNamingV20170314ListOperationsHandler,
  xAmzTargetRoute53AutoNamingV20170314ListServicesHandler,
  xAmzTargetRoute53AutoNamingV20170314ListTagsForResourceHandler,
  xAmzTargetRoute53AutoNamingV20170314RegisterInstanceHandler,
  xAmzTargetRoute53AutoNamingV20170314TagResourceHandler,
  xAmzTargetRoute53AutoNamingV20170314UntagResourceHandler,
  xAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusHandler,
  xAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceHandler,
  xAmzTargetRoute53AutoNamingV20170314UpdateServiceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314CreateServiceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314DeleteNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314DeleteServiceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314DeregisterInstanceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314DiscoverInstancesHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314GetInstanceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314GetNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314GetOperationHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314GetServiceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314ListInstancesHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314ListNamespacesHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314ListOperationsHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314ListServicesHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314ListTagsForResourceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314RegisterInstanceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314TagResourceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314UntagResourceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceHandler)
  .route('/', xAmzTargetRoute53AutoNamingV20170314UpdateServiceHandler)

export default app
