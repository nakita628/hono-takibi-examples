import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointRoute,
  patchApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointIdRoute,
  postApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverlessPrivateEndpointsHandler = app
  .openapi(
    getApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAtlasV2GroupsGroupIdPrivateEndpointServerlessInstanceInstanceNameEndpointEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
