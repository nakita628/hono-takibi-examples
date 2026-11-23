import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRoute,
  deleteSigningProfilesProfileNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getSigningJobsJobIdRoute,
  getSigningJobsRoute,
  getSigningPlatformsPlatformIdRoute,
  getSigningPlatformsRoute,
  getSigningProfilesProfileNamePermissionsRoute,
  getSigningProfilesProfileNameRoute,
  getSigningProfilesRoute,
  getTagsResourceArnRoute,
  postSigningJobsRoute,
  postSigningProfilesProfileNamePermissionsRoute,
  postTagsResourceArnRoute,
  putSigningJobsJobIdRevokeRoute,
  putSigningProfilesProfileNameRevokeRoute,
  putSigningProfilesProfileNameRoute,
} from './routes'
import {
  deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRouteHandler,
  deleteSigningProfilesProfileNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getSigningJobsJobIdRouteHandler,
  getSigningJobsRouteHandler,
  getSigningPlatformsPlatformIdRouteHandler,
  getSigningPlatformsRouteHandler,
  getSigningProfilesProfileNamePermissionsRouteHandler,
  getSigningProfilesProfileNameRouteHandler,
  getSigningProfilesRouteHandler,
  getTagsResourceArnRouteHandler,
  postSigningJobsRouteHandler,
  postSigningProfilesProfileNamePermissionsRouteHandler,
  postTagsResourceArnRouteHandler,
  putSigningJobsJobIdRevokeRouteHandler,
  putSigningProfilesProfileNameRevokeRouteHandler,
  putSigningProfilesProfileNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postSigningProfilesProfileNamePermissionsRoute,
    postSigningProfilesProfileNamePermissionsRouteHandler,
  )
  .openapi(
    getSigningProfilesProfileNamePermissionsRoute,
    getSigningProfilesProfileNamePermissionsRouteHandler,
  )
  .openapi(deleteSigningProfilesProfileNameRoute, deleteSigningProfilesProfileNameRouteHandler)
  .openapi(getSigningProfilesProfileNameRoute, getSigningProfilesProfileNameRouteHandler)
  .openapi(putSigningProfilesProfileNameRoute, putSigningProfilesProfileNameRouteHandler)
  .openapi(getSigningJobsJobIdRoute, getSigningJobsJobIdRouteHandler)
  .openapi(getSigningPlatformsPlatformIdRoute, getSigningPlatformsPlatformIdRouteHandler)
  .openapi(getSigningJobsRoute, getSigningJobsRouteHandler)
  .openapi(postSigningJobsRoute, postSigningJobsRouteHandler)
  .openapi(getSigningPlatformsRoute, getSigningPlatformsRouteHandler)
  .openapi(getSigningProfilesRoute, getSigningProfilesRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRoute,
    deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRouteHandler,
  )
  .openapi(putSigningJobsJobIdRevokeRoute, putSigningJobsJobIdRevokeRouteHandler)
  .openapi(
    putSigningProfilesProfileNameRevokeRoute,
    putSigningProfilesProfileNameRevokeRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
