import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetMediaStore20170901CreateContainerHandler,
  xAmzTargetMediaStore20170901DeleteContainerHandler,
  xAmzTargetMediaStore20170901DeleteContainerPolicyHandler,
  xAmzTargetMediaStore20170901DeleteCorsPolicyHandler,
  xAmzTargetMediaStore20170901DeleteLifecyclePolicyHandler,
  xAmzTargetMediaStore20170901DeleteMetricPolicyHandler,
  xAmzTargetMediaStore20170901DescribeContainerHandler,
  xAmzTargetMediaStore20170901GetContainerPolicyHandler,
  xAmzTargetMediaStore20170901GetCorsPolicyHandler,
  xAmzTargetMediaStore20170901GetLifecyclePolicyHandler,
  xAmzTargetMediaStore20170901GetMetricPolicyHandler,
  xAmzTargetMediaStore20170901ListContainersHandler,
  xAmzTargetMediaStore20170901ListTagsForResourceHandler,
  xAmzTargetMediaStore20170901PutContainerPolicyHandler,
  xAmzTargetMediaStore20170901PutCorsPolicyHandler,
  xAmzTargetMediaStore20170901PutLifecyclePolicyHandler,
  xAmzTargetMediaStore20170901PutMetricPolicyHandler,
  xAmzTargetMediaStore20170901StartAccessLoggingHandler,
  xAmzTargetMediaStore20170901StopAccessLoggingHandler,
  xAmzTargetMediaStore20170901TagResourceHandler,
  xAmzTargetMediaStore20170901UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetMediaStore20170901CreateContainerHandler)
  .route('/', xAmzTargetMediaStore20170901DeleteContainerHandler)
  .route('/', xAmzTargetMediaStore20170901DeleteContainerPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901DeleteCorsPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901DeleteLifecyclePolicyHandler)
  .route('/', xAmzTargetMediaStore20170901DeleteMetricPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901DescribeContainerHandler)
  .route('/', xAmzTargetMediaStore20170901GetContainerPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901GetCorsPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901GetLifecyclePolicyHandler)
  .route('/', xAmzTargetMediaStore20170901GetMetricPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901ListContainersHandler)
  .route('/', xAmzTargetMediaStore20170901ListTagsForResourceHandler)
  .route('/', xAmzTargetMediaStore20170901PutContainerPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901PutCorsPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901PutLifecyclePolicyHandler)
  .route('/', xAmzTargetMediaStore20170901PutMetricPolicyHandler)
  .route('/', xAmzTargetMediaStore20170901StartAccessLoggingHandler)
  .route('/', xAmzTargetMediaStore20170901StopAccessLoggingHandler)
  .route('/', xAmzTargetMediaStore20170901TagResourceHandler)
  .route('/', xAmzTargetMediaStore20170901UntagResourceHandler)

export default app
