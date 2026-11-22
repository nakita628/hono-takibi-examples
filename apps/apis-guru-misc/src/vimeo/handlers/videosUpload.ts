import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdUploadsUploadRoute,
  getUsersUserIdUploadsUploadRoute,
  postMeVideosRoute,
  postUsersUserIdVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosUploadHandler = app
  .openapi(postMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdUploadsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdUploadsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
