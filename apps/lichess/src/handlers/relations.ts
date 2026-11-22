import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRelFollowingRoute,
  postApiRelBlockUsernameRoute,
  postApiRelFollowUsernameRoute,
  postApiRelUnblockUsernameRoute,
  postApiRelUnfollowUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationsHandler = app
  .openapi(getApiRelFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelFollowUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelUnfollowUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelBlockUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRelUnblockUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
