import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCodeStar20170419AssociateTeamMemberHandler,
  XAmzTargetCodeStar20170419CreateProjectHandler,
  XAmzTargetCodeStar20170419CreateUserProfileHandler,
  XAmzTargetCodeStar20170419DeleteProjectHandler,
  XAmzTargetCodeStar20170419DeleteUserProfileHandler,
  XAmzTargetCodeStar20170419DescribeProjectHandler,
  XAmzTargetCodeStar20170419DescribeUserProfileHandler,
  XAmzTargetCodeStar20170419DisassociateTeamMemberHandler,
  XAmzTargetCodeStar20170419ListProjectsHandler,
  XAmzTargetCodeStar20170419ListResourcesHandler,
  XAmzTargetCodeStar20170419ListTagsForProjectHandler,
  XAmzTargetCodeStar20170419ListTeamMembersHandler,
  XAmzTargetCodeStar20170419ListUserProfilesHandler,
  XAmzTargetCodeStar20170419TagProjectHandler,
  XAmzTargetCodeStar20170419UntagProjectHandler,
  XAmzTargetCodeStar20170419UpdateProjectHandler,
  XAmzTargetCodeStar20170419UpdateTeamMemberHandler,
  XAmzTargetCodeStar20170419UpdateUserProfileHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCodeStar20170419AssociateTeamMemberHandler)
  .route('/', XAmzTargetCodeStar20170419CreateProjectHandler)
  .route('/', XAmzTargetCodeStar20170419CreateUserProfileHandler)
  .route('/', XAmzTargetCodeStar20170419DeleteProjectHandler)
  .route('/', XAmzTargetCodeStar20170419DeleteUserProfileHandler)
  .route('/', XAmzTargetCodeStar20170419DescribeProjectHandler)
  .route('/', XAmzTargetCodeStar20170419DescribeUserProfileHandler)
  .route('/', XAmzTargetCodeStar20170419DisassociateTeamMemberHandler)
  .route('/', XAmzTargetCodeStar20170419ListProjectsHandler)
  .route('/', XAmzTargetCodeStar20170419ListResourcesHandler)
  .route('/', XAmzTargetCodeStar20170419ListTagsForProjectHandler)
  .route('/', XAmzTargetCodeStar20170419ListTeamMembersHandler)
  .route('/', XAmzTargetCodeStar20170419ListUserProfilesHandler)
  .route('/', XAmzTargetCodeStar20170419TagProjectHandler)
  .route('/', XAmzTargetCodeStar20170419UntagProjectHandler)
  .route('/', XAmzTargetCodeStar20170419UpdateProjectHandler)
  .route('/', XAmzTargetCodeStar20170419UpdateTeamMemberHandler)
  .route('/', XAmzTargetCodeStar20170419UpdateUserProfileHandler)

export default app
