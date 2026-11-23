import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCodeStar20170419AssociateTeamMemberHandler,
  xAmzTargetCodeStar20170419CreateProjectHandler,
  xAmzTargetCodeStar20170419CreateUserProfileHandler,
  xAmzTargetCodeStar20170419DeleteProjectHandler,
  xAmzTargetCodeStar20170419DeleteUserProfileHandler,
  xAmzTargetCodeStar20170419DescribeProjectHandler,
  xAmzTargetCodeStar20170419DescribeUserProfileHandler,
  xAmzTargetCodeStar20170419DisassociateTeamMemberHandler,
  xAmzTargetCodeStar20170419ListProjectsHandler,
  xAmzTargetCodeStar20170419ListResourcesHandler,
  xAmzTargetCodeStar20170419ListTagsForProjectHandler,
  xAmzTargetCodeStar20170419ListTeamMembersHandler,
  xAmzTargetCodeStar20170419ListUserProfilesHandler,
  xAmzTargetCodeStar20170419TagProjectHandler,
  xAmzTargetCodeStar20170419UntagProjectHandler,
  xAmzTargetCodeStar20170419UpdateProjectHandler,
  xAmzTargetCodeStar20170419UpdateTeamMemberHandler,
  xAmzTargetCodeStar20170419UpdateUserProfileHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCodeStar20170419AssociateTeamMemberHandler)
  .route('/', xAmzTargetCodeStar20170419CreateProjectHandler)
  .route('/', xAmzTargetCodeStar20170419CreateUserProfileHandler)
  .route('/', xAmzTargetCodeStar20170419DeleteProjectHandler)
  .route('/', xAmzTargetCodeStar20170419DeleteUserProfileHandler)
  .route('/', xAmzTargetCodeStar20170419DescribeProjectHandler)
  .route('/', xAmzTargetCodeStar20170419DescribeUserProfileHandler)
  .route('/', xAmzTargetCodeStar20170419DisassociateTeamMemberHandler)
  .route('/', xAmzTargetCodeStar20170419ListProjectsHandler)
  .route('/', xAmzTargetCodeStar20170419ListResourcesHandler)
  .route('/', xAmzTargetCodeStar20170419ListTagsForProjectHandler)
  .route('/', xAmzTargetCodeStar20170419ListTeamMembersHandler)
  .route('/', xAmzTargetCodeStar20170419ListUserProfilesHandler)
  .route('/', xAmzTargetCodeStar20170419TagProjectHandler)
  .route('/', xAmzTargetCodeStar20170419UntagProjectHandler)
  .route('/', xAmzTargetCodeStar20170419UpdateProjectHandler)
  .route('/', xAmzTargetCodeStar20170419UpdateTeamMemberHandler)
  .route('/', xAmzTargetCodeStar20170419UpdateUserProfileHandler)

export default app
