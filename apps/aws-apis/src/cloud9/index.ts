import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2Handler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceCreateEnvironmentMembershipHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceDeleteEnvironmentHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentsHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatusHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceListEnvironmentsHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceListTagsForResourceHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceTagResourceHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceUntagResourceHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceUpdateEnvironmentHandler,
  xAmzTargetAwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceCreateEnvironmentEc2Handler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceCreateEnvironmentMembershipHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceDeleteEnvironmentHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentStatusHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceDescribeEnvironmentsHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceListEnvironmentsHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceListTagsForResourceHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceTagResourceHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceUntagResourceHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceUpdateEnvironmentHandler)
  .route('/', xAmzTargetAwsCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipHandler)

export default app
