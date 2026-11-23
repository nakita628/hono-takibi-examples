import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserIdForUsernameRoute,
  getUserUserIdArticlesRoute,
  getUserUserIdFollowersRoute,
  getUserUserIdFollowingRoute,
  getUserUserIdInterestsRoute,
  getUserUserIdListsRoute,
  getUserUserIdPublicationsRoute,
  getUserUserIdRoute,
  getUserUserIdTopArticlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserIdForUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdInterestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdTopArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
