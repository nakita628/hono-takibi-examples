import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStreamsStreamIdRoute,
  getStreamsRoute,
  getStreamsStreamIdEmailAddressRoute,
  getStreamsStreamIdMembersRoute,
  getStreamsStreamIdRoute,
  patchStreamsStreamIdRoute,
  postStreamsStreamIdDeleteTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamsHandler = app
  .openapi(getStreamsStreamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStreamIdEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStreamsStreamIdDeleteTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
