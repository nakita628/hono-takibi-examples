import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserFollowsNetworksNetworkIdRoute,
  getUserFollowsNetworksNetworkIdRoute,
  getUserFollowsNetworksRoute,
  putUserFollowsNetworksNetworkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const followedNetworksHandler = app
  .openapi(getUserFollowsNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserFollowsNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFollowsNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFollowsNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
