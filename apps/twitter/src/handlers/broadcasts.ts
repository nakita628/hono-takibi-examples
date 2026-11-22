import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2BroadcastsChatModeratorsUserIdRoute,
  delete2BroadcastsChatMutesUserIdRoute,
  delete2BroadcastsIdChatMessageIdRoute,
  delete2BroadcastsIdChatMutesUserIdRoute,
  delete2BroadcastsIdRoute,
  delete2BroadcastsScheduledIdRoute,
  delete2SourcesIdRoute,
  delete2UsersIdBroadcastsBroadcastIdRoute,
  delete2UsersIdSourcesSourceIdRoute,
  get2BroadcastsCategoriesRoute,
  get2BroadcastsChatModeratorsRoute,
  get2BroadcastsChatMutesRoute,
  get2BroadcastsIdChatRoute,
  get2BroadcastsIdRoute,
  get2BroadcastsRoute,
  get2BroadcastsScheduledIdRoute,
  get2BroadcastsScheduledRoute,
  get2RegionRoute,
  get2SourcesIdRoute,
  get2SourcesIdStreamKeyRoute,
  get2SourcesRoute,
  get2UsersIdBroadcastsBroadcastIdRoute,
  get2UsersIdBroadcastsRoute,
  get2UsersIdSourcesRoute,
  get2UsersIdSourcesSourceIdRoute,
  post2BroadcastsChatModeratorsRoute,
  post2BroadcastsChatMutesRoute,
  post2BroadcastsIdChatMutesRoute,
  post2BroadcastsIdChatRoute,
  post2BroadcastsRoute,
  post2BroadcastsScheduledIdLiveRoute,
  post2BroadcastsScheduledRoute,
  post2SourcesRoute,
  post2UsersIdBroadcastsRoute,
  post2UsersIdSourcesRoute,
  put2BroadcastsIdRoute,
  put2BroadcastsIdStateRoute,
  put2BroadcastsScheduledIdRoute,
  put2SourcesIdRoute,
  put2UsersIdBroadcastsBroadcastIdStateRoute,
  put2UsersIdSourcesSourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const broadcastsHandler = app
  .openapi(get2BroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsChatModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BroadcastsChatModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsChatMutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsChatMutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BroadcastsChatMutesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsScheduledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BroadcastsScheduledIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsScheduledIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2BroadcastsScheduledIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsScheduledIdLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BroadcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2BroadcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2BroadcastsIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BroadcastsIdChatMutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BroadcastsIdChatMutesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BroadcastsIdChatMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2BroadcastsIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2RegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2SourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2SourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SourcesIdStreamKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdBroadcastsBroadcastIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdBroadcastsBroadcastIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2UsersIdBroadcastsBroadcastIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2UsersIdSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2UsersIdSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2UsersIdSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2UsersIdSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
