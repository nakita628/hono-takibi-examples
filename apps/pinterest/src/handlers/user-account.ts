import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserAccountWebsitesRoute,
  getUserAccountAnalyticsRoute,
  getUserAccountAnalyticsTopPinsRoute,
  getUserAccountAnalyticsTopVideoPinsRoute,
  getUserAccountBusinessesRoute,
  getUserAccountFollowersRoute,
  getUserAccountFollowingBoardsRoute,
  getUserAccountFollowingRoute,
  getUserAccountRoute,
  getUserAccountWebsitesRoute,
  getUserAccountWebsitesVerificationRoute,
  postUserAccountFollowingUsernameRoute,
  postUserAccountWebsitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAccountHandler = app
  .openapi(getUserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountAnalyticsTopPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountAnalyticsTopVideoPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountBusinessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountFollowingBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAccountFollowingUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAccountWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserAccountWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAccountWebsitesVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
