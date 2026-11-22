import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  getNetworksNetworkIdMerakiAuthUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const merakiAuthUsersHandler = app
  .openapi(getNetworksNetworkIdMerakiAuthUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
