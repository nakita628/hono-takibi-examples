import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314CreateServiceHandler,
  XAmzTargetRoute53AutoNamingV20170314DeleteNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314DeleteServiceHandler,
  XAmzTargetRoute53AutoNamingV20170314DeregisterInstanceHandler,
  XAmzTargetRoute53AutoNamingV20170314DiscoverInstancesHandler,
  XAmzTargetRoute53AutoNamingV20170314GetInstanceHandler,
  XAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusHandler,
  XAmzTargetRoute53AutoNamingV20170314GetNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314GetOperationHandler,
  XAmzTargetRoute53AutoNamingV20170314GetServiceHandler,
  XAmzTargetRoute53AutoNamingV20170314ListInstancesHandler,
  XAmzTargetRoute53AutoNamingV20170314ListNamespacesHandler,
  XAmzTargetRoute53AutoNamingV20170314ListOperationsHandler,
  XAmzTargetRoute53AutoNamingV20170314ListServicesHandler,
  XAmzTargetRoute53AutoNamingV20170314ListTagsForResourceHandler,
  XAmzTargetRoute53AutoNamingV20170314RegisterInstanceHandler,
  XAmzTargetRoute53AutoNamingV20170314TagResourceHandler,
  XAmzTargetRoute53AutoNamingV20170314UntagResourceHandler,
  XAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusHandler,
  XAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceHandler,
  XAmzTargetRoute53AutoNamingV20170314UpdateServiceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314CreateServiceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314DeleteNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314DeleteServiceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314DeregisterInstanceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314DiscoverInstancesHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314GetInstanceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314GetNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314GetOperationHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314GetServiceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314ListInstancesHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314ListNamespacesHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314ListOperationsHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314ListServicesHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314ListTagsForResourceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314RegisterInstanceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314TagResourceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314UntagResourceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceHandler)
  .route('/', XAmzTargetRoute53AutoNamingV20170314UpdateServiceHandler)

export default app
