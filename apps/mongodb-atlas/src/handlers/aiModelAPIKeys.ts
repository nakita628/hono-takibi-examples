import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyIdRoute,
  getApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyIdRoute,
  getApiAtlasV2GroupsGroupIdAiModelApiKeysRoute,
  getApiAtlasV2OrgsOrgIdAiModelApiKeysApiKeyIdRoute,
  getApiAtlasV2OrgsOrgIdAiModelApiKeysRoute,
  patchApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyIdRoute,
  postApiAtlasV2GroupsGroupIdAiModelApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiModelAPIKeysHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdAiModelApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdAiModelApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdAiModelApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdAiModelApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdAiModelApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
