import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdContainersContainerIdRoute,
  deleteApiAtlasV2GroupsGroupIdPeersPeerIdRoute,
  getApiAtlasV2GroupsGroupIdContainersAllRoute,
  getApiAtlasV2GroupsGroupIdContainersContainerIdRoute,
  getApiAtlasV2GroupsGroupIdContainersRoute,
  getApiAtlasV2GroupsGroupIdPeersPeerIdRoute,
  getApiAtlasV2GroupsGroupIdPeersRoute,
  getApiAtlasV2GroupsGroupIdPrivateIpModeRoute,
  patchApiAtlasV2GroupsGroupIdContainersContainerIdRoute,
  patchApiAtlasV2GroupsGroupIdPeersPeerIdRoute,
  patchApiAtlasV2GroupsGroupIdPrivateIpModeRoute,
  postApiAtlasV2GroupsGroupIdContainersRoute,
  postApiAtlasV2GroupsGroupIdPeersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkPeeringHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdContainersContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdContainersContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdContainersContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdContainersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdPeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdPeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdPeersPeerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdPrivateIpModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdPrivateIpModeRoute, (c) => {
    throw new Error('Not implemented')
  })
