import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdUploadsUploadIdRoute,
  getUsersUserIdUploadsUploadIdRoute,
  postMeVideosRoute,
  postUsersUserIdVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosUploadsHandler = app
  .openapi(postMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
