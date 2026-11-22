import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetMediaStore20170901CreateContainerHandler,
  XAmzTargetMediaStore20170901DeleteContainerHandler,
  XAmzTargetMediaStore20170901DeleteContainerPolicyHandler,
  XAmzTargetMediaStore20170901DeleteCorsPolicyHandler,
  XAmzTargetMediaStore20170901DeleteLifecyclePolicyHandler,
  XAmzTargetMediaStore20170901DeleteMetricPolicyHandler,
  XAmzTargetMediaStore20170901DescribeContainerHandler,
  XAmzTargetMediaStore20170901GetContainerPolicyHandler,
  XAmzTargetMediaStore20170901GetCorsPolicyHandler,
  XAmzTargetMediaStore20170901GetLifecyclePolicyHandler,
  XAmzTargetMediaStore20170901GetMetricPolicyHandler,
  XAmzTargetMediaStore20170901ListContainersHandler,
  XAmzTargetMediaStore20170901ListTagsForResourceHandler,
  XAmzTargetMediaStore20170901PutContainerPolicyHandler,
  XAmzTargetMediaStore20170901PutCorsPolicyHandler,
  XAmzTargetMediaStore20170901PutLifecyclePolicyHandler,
  XAmzTargetMediaStore20170901PutMetricPolicyHandler,
  XAmzTargetMediaStore20170901StartAccessLoggingHandler,
  XAmzTargetMediaStore20170901StopAccessLoggingHandler,
  XAmzTargetMediaStore20170901TagResourceHandler,
  XAmzTargetMediaStore20170901UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetMediaStore20170901CreateContainerHandler)
  .route('/', XAmzTargetMediaStore20170901DeleteContainerHandler)
  .route('/', XAmzTargetMediaStore20170901DeleteContainerPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901DeleteCorsPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901DeleteLifecyclePolicyHandler)
  .route('/', XAmzTargetMediaStore20170901DeleteMetricPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901DescribeContainerHandler)
  .route('/', XAmzTargetMediaStore20170901GetContainerPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901GetCorsPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901GetLifecyclePolicyHandler)
  .route('/', XAmzTargetMediaStore20170901GetMetricPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901ListContainersHandler)
  .route('/', XAmzTargetMediaStore20170901ListTagsForResourceHandler)
  .route('/', XAmzTargetMediaStore20170901PutContainerPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901PutCorsPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901PutLifecyclePolicyHandler)
  .route('/', XAmzTargetMediaStore20170901PutMetricPolicyHandler)
  .route('/', XAmzTargetMediaStore20170901StartAccessLoggingHandler)
  .route('/', XAmzTargetMediaStore20170901StopAccessLoggingHandler)
  .route('/', XAmzTargetMediaStore20170901TagResourceHandler)
  .route('/', XAmzTargetMediaStore20170901UntagResourceHandler)

export default app
