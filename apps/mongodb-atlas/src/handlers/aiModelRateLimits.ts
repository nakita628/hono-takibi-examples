import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsRoute,
  getApiAtlasV2GroupsGroupIdAiModelApiRateLimitsRoute,
  getApiAtlasV2OrgsOrgIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsRoute,
  getApiAtlasV2OrgsOrgIdAiModelApiRateLimitsRoute,
  patchApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsRoute,
  postApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsResetRoute,
  postApiAtlasV2GroupsGroupIdAiModelApiRateLimitsResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiModelRateLimitsHandler = app
  .openapi(
    getApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsResetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdAiModelApiRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdAiModelApiRateLimitsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2OrgsOrgIdAiModelApiCloudsCloudGeographiesGeographyModelGroupNamesModelGroupNameRateLimitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2OrgsOrgIdAiModelApiRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
