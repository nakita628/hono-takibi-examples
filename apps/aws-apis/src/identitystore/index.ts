import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSIdentityStoreCreateGroupHandler,
  XAmzTargetAWSIdentityStoreCreateGroupMembershipHandler,
  XAmzTargetAWSIdentityStoreCreateUserHandler,
  XAmzTargetAWSIdentityStoreDeleteGroupHandler,
  XAmzTargetAWSIdentityStoreDeleteGroupMembershipHandler,
  XAmzTargetAWSIdentityStoreDeleteUserHandler,
  XAmzTargetAWSIdentityStoreDescribeGroupHandler,
  XAmzTargetAWSIdentityStoreDescribeGroupMembershipHandler,
  XAmzTargetAWSIdentityStoreDescribeUserHandler,
  XAmzTargetAWSIdentityStoreGetGroupIdHandler,
  XAmzTargetAWSIdentityStoreGetGroupMembershipIdHandler,
  XAmzTargetAWSIdentityStoreGetUserIdHandler,
  XAmzTargetAWSIdentityStoreIsMemberInGroupsHandler,
  XAmzTargetAWSIdentityStoreListGroupMembershipsForMemberHandler,
  XAmzTargetAWSIdentityStoreListGroupMembershipsHandler,
  XAmzTargetAWSIdentityStoreListGroupsHandler,
  XAmzTargetAWSIdentityStoreListUsersHandler,
  XAmzTargetAWSIdentityStoreUpdateGroupHandler,
  XAmzTargetAWSIdentityStoreUpdateUserHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSIdentityStoreCreateGroupHandler)
  .route('/', XAmzTargetAWSIdentityStoreCreateGroupMembershipHandler)
  .route('/', XAmzTargetAWSIdentityStoreCreateUserHandler)
  .route('/', XAmzTargetAWSIdentityStoreDeleteGroupHandler)
  .route('/', XAmzTargetAWSIdentityStoreDeleteGroupMembershipHandler)
  .route('/', XAmzTargetAWSIdentityStoreDeleteUserHandler)
  .route('/', XAmzTargetAWSIdentityStoreDescribeGroupHandler)
  .route('/', XAmzTargetAWSIdentityStoreDescribeGroupMembershipHandler)
  .route('/', XAmzTargetAWSIdentityStoreDescribeUserHandler)
  .route('/', XAmzTargetAWSIdentityStoreGetGroupIdHandler)
  .route('/', XAmzTargetAWSIdentityStoreGetGroupMembershipIdHandler)
  .route('/', XAmzTargetAWSIdentityStoreGetUserIdHandler)
  .route('/', XAmzTargetAWSIdentityStoreIsMemberInGroupsHandler)
  .route('/', XAmzTargetAWSIdentityStoreListGroupMembershipsHandler)
  .route('/', XAmzTargetAWSIdentityStoreListGroupMembershipsForMemberHandler)
  .route('/', XAmzTargetAWSIdentityStoreListGroupsHandler)
  .route('/', XAmzTargetAWSIdentityStoreListUsersHandler)
  .route('/', XAmzTargetAWSIdentityStoreUpdateGroupHandler)
  .route('/', XAmzTargetAWSIdentityStoreUpdateUserHandler)

export default app
