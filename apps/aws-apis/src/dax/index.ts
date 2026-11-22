import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonDAXV3CreateClusterHandler,
  XAmzTargetAmazonDAXV3CreateParameterGroupHandler,
  XAmzTargetAmazonDAXV3CreateSubnetGroupHandler,
  XAmzTargetAmazonDAXV3DecreaseReplicationFactorHandler,
  XAmzTargetAmazonDAXV3DeleteClusterHandler,
  XAmzTargetAmazonDAXV3DeleteParameterGroupHandler,
  XAmzTargetAmazonDAXV3DeleteSubnetGroupHandler,
  XAmzTargetAmazonDAXV3DescribeClustersHandler,
  XAmzTargetAmazonDAXV3DescribeDefaultParametersHandler,
  XAmzTargetAmazonDAXV3DescribeEventsHandler,
  XAmzTargetAmazonDAXV3DescribeParameterGroupsHandler,
  XAmzTargetAmazonDAXV3DescribeParametersHandler,
  XAmzTargetAmazonDAXV3DescribeSubnetGroupsHandler,
  XAmzTargetAmazonDAXV3IncreaseReplicationFactorHandler,
  XAmzTargetAmazonDAXV3ListTagsHandler,
  XAmzTargetAmazonDAXV3RebootNodeHandler,
  XAmzTargetAmazonDAXV3TagResourceHandler,
  XAmzTargetAmazonDAXV3UntagResourceHandler,
  XAmzTargetAmazonDAXV3UpdateClusterHandler,
  XAmzTargetAmazonDAXV3UpdateParameterGroupHandler,
  XAmzTargetAmazonDAXV3UpdateSubnetGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonDAXV3CreateClusterHandler)
  .route('/', XAmzTargetAmazonDAXV3CreateParameterGroupHandler)
  .route('/', XAmzTargetAmazonDAXV3CreateSubnetGroupHandler)
  .route('/', XAmzTargetAmazonDAXV3DecreaseReplicationFactorHandler)
  .route('/', XAmzTargetAmazonDAXV3DeleteClusterHandler)
  .route('/', XAmzTargetAmazonDAXV3DeleteParameterGroupHandler)
  .route('/', XAmzTargetAmazonDAXV3DeleteSubnetGroupHandler)
  .route('/', XAmzTargetAmazonDAXV3DescribeClustersHandler)
  .route('/', XAmzTargetAmazonDAXV3DescribeDefaultParametersHandler)
  .route('/', XAmzTargetAmazonDAXV3DescribeEventsHandler)
  .route('/', XAmzTargetAmazonDAXV3DescribeParameterGroupsHandler)
  .route('/', XAmzTargetAmazonDAXV3DescribeParametersHandler)
  .route('/', XAmzTargetAmazonDAXV3DescribeSubnetGroupsHandler)
  .route('/', XAmzTargetAmazonDAXV3IncreaseReplicationFactorHandler)
  .route('/', XAmzTargetAmazonDAXV3ListTagsHandler)
  .route('/', XAmzTargetAmazonDAXV3RebootNodeHandler)
  .route('/', XAmzTargetAmazonDAXV3TagResourceHandler)
  .route('/', XAmzTargetAmazonDAXV3UntagResourceHandler)
  .route('/', XAmzTargetAmazonDAXV3UpdateClusterHandler)
  .route('/', XAmzTargetAmazonDAXV3UpdateParameterGroupHandler)
  .route('/', XAmzTargetAmazonDAXV3UpdateSubnetGroupHandler)

export default app
