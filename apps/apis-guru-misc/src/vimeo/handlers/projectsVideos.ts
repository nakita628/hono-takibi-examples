import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeProjectsProjectIdVideosRoute,
  deleteMeProjectsProjectIdVideosVideoIdRoute,
  deleteUsersUserIdProjectsProjectIdVideosRoute,
  deleteUsersUserIdProjectsProjectIdVideosVideoIdRoute,
  getMeProjectsProjectIdVideosRoute,
  getUsersUserIdProjectsProjectIdVideosRoute,
  putMeProjectsProjectIdVideosRoute,
  putMeProjectsProjectIdVideosVideoIdRoute,
  putUsersUserIdProjectsProjectIdVideosRoute,
  putUsersUserIdProjectsProjectIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsVideosHandler = app
  .openapi(deleteMeProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdProjectsProjectIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdProjectsProjectIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
