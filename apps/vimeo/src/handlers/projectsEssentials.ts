import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeProjectsProjectIdRoute,
  deleteUsersUserIdProjectsProjectIdRoute,
  getMeProjectsProjectIdRoute,
  getMeProjectsRoute,
  getUsersUserIdProjectsProjectIdRoute,
  getUsersUserIdProjectsRoute,
  patchMeProjectsProjectIdRoute,
  patchUsersUserIdProjectsProjectIdRoute,
  postMeProjectsRoute,
  postUsersUserIdProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsEssentialsHandler = app
  .openapi(getMeProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
