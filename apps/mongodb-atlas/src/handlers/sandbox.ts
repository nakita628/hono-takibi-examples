import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigIdRoute,
  getApiAtlasV2GroupsGroupIdSandboxSandboxConfigIdGenerateClusterDescriptionRoute,
  getApiAtlasV2OrgsOrgIdSandboxConfigRoute,
  getApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigIdRoute,
  patchApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigIdRoute,
  postApiAtlasV2OrgsOrgIdSandboxConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdSandboxSandboxConfigIdGenerateClusterDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdSandboxConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdSandboxConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdSandboxConfigSandboxConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
