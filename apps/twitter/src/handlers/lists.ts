import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ListsIdMembersUserIdRoute,
  delete2ListsIdRoute,
  get2ListsIdFollowersRoute,
  get2ListsIdMembersRoute,
  get2ListsIdRoute,
  get2ListsIdTweetsRoute,
  post2ListsIdMembersRoute,
  post2ListsRoute,
  put2ListsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(post2ListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ListsIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ListsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2ListsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2ListsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2ListsIdTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
