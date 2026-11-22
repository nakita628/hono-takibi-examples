import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsEditorsRoute,
  getChannelsFollowedRoute,
  getChannelsFollowersRoute,
  getChannelsRoute,
  patchChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsEditorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsFollowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
