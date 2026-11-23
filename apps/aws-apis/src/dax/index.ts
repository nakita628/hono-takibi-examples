import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonDaxv3CreateClusterHandler,
  xAmzTargetAmazonDaxv3CreateParameterGroupHandler,
  xAmzTargetAmazonDaxv3CreateSubnetGroupHandler,
  xAmzTargetAmazonDaxv3DecreaseReplicationFactorHandler,
  xAmzTargetAmazonDaxv3DeleteClusterHandler,
  xAmzTargetAmazonDaxv3DeleteParameterGroupHandler,
  xAmzTargetAmazonDaxv3DeleteSubnetGroupHandler,
  xAmzTargetAmazonDaxv3DescribeClustersHandler,
  xAmzTargetAmazonDaxv3DescribeDefaultParametersHandler,
  xAmzTargetAmazonDaxv3DescribeEventsHandler,
  xAmzTargetAmazonDaxv3DescribeParameterGroupsHandler,
  xAmzTargetAmazonDaxv3DescribeParametersHandler,
  xAmzTargetAmazonDaxv3DescribeSubnetGroupsHandler,
  xAmzTargetAmazonDaxv3IncreaseReplicationFactorHandler,
  xAmzTargetAmazonDaxv3ListTagsHandler,
  xAmzTargetAmazonDaxv3RebootNodeHandler,
  xAmzTargetAmazonDaxv3TagResourceHandler,
  xAmzTargetAmazonDaxv3UntagResourceHandler,
  xAmzTargetAmazonDaxv3UpdateClusterHandler,
  xAmzTargetAmazonDaxv3UpdateParameterGroupHandler,
  xAmzTargetAmazonDaxv3UpdateSubnetGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonDaxv3CreateClusterHandler)
  .route('/', xAmzTargetAmazonDaxv3CreateParameterGroupHandler)
  .route('/', xAmzTargetAmazonDaxv3CreateSubnetGroupHandler)
  .route('/', xAmzTargetAmazonDaxv3DecreaseReplicationFactorHandler)
  .route('/', xAmzTargetAmazonDaxv3DeleteClusterHandler)
  .route('/', xAmzTargetAmazonDaxv3DeleteParameterGroupHandler)
  .route('/', xAmzTargetAmazonDaxv3DeleteSubnetGroupHandler)
  .route('/', xAmzTargetAmazonDaxv3DescribeClustersHandler)
  .route('/', xAmzTargetAmazonDaxv3DescribeDefaultParametersHandler)
  .route('/', xAmzTargetAmazonDaxv3DescribeEventsHandler)
  .route('/', xAmzTargetAmazonDaxv3DescribeParameterGroupsHandler)
  .route('/', xAmzTargetAmazonDaxv3DescribeParametersHandler)
  .route('/', xAmzTargetAmazonDaxv3DescribeSubnetGroupsHandler)
  .route('/', xAmzTargetAmazonDaxv3IncreaseReplicationFactorHandler)
  .route('/', xAmzTargetAmazonDaxv3ListTagsHandler)
  .route('/', xAmzTargetAmazonDaxv3RebootNodeHandler)
  .route('/', xAmzTargetAmazonDaxv3TagResourceHandler)
  .route('/', xAmzTargetAmazonDaxv3UntagResourceHandler)
  .route('/', xAmzTargetAmazonDaxv3UpdateClusterHandler)
  .route('/', xAmzTargetAmazonDaxv3UpdateParameterGroupHandler)
  .route('/', xAmzTargetAmazonDaxv3UpdateSubnetGroupHandler)

export default app
