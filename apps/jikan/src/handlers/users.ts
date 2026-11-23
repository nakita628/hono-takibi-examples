import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersRoute,
  getUsersUserbyidIdRoute,
  getUsersUsernameAboutRoute,
  getUsersUsernameAnimelistRoute,
  getUsersUsernameClubsRoute,
  getUsersUsernameExternalRoute,
  getUsersUsernameFavoritesRoute,
  getUsersUsernameFriendsRoute,
  getUsersUsernameFullRoute,
  getUsersUsernameHistoryRoute,
  getUsersUsernameMangalistRoute,
  getUsersUsernameRecommendationsRoute,
  getUsersUsernameReviewsRoute,
  getUsersUsernameRoute,
  getUsersUsernameStatisticsRoute,
  getUsersUsernameUserupdatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserbyidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameUserupdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameFriendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameAnimelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameMangalistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameClubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
