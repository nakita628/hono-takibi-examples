import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidpublisherV3NameRoute,
  getAndroidpublisherV3ParentUsersRoute,
  patchAndroidpublisherV3NameRoute,
  postAndroidpublisherV3ParentUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteAndroidpublisherV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ParentUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ParentUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
