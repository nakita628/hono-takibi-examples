import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeLikesVideoIdRoute,
  deleteUsersUserIdLikesVideoIdRoute,
  getChannelsChannelIdVideosVideoIdLikesRoute,
  getMeLikesRoute,
  getMeLikesVideoIdRoute,
  getOndemandPagesOndemandIdLikesRoute,
  getUsersUserIdLikesRoute,
  getUsersUserIdLikesVideoIdRoute,
  getVideosVideoIdLikesRoute,
  putMeLikesVideoIdRoute,
  putUsersUserIdLikesVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const likesEssentialsHandler = app
  .openapi(getChannelsChannelIdVideosVideoIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdLikesVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
