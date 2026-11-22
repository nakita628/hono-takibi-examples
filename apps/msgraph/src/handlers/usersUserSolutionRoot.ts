import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdSolutionsRoute,
  deleteUsersUserIdSolutionsWorkingTimeScheduleRoute,
  getUsersUserIdSolutionsRoute,
  getUsersUserIdSolutionsWorkingTimeScheduleRoute,
  patchUsersUserIdSolutionsRoute,
  patchUsersUserIdSolutionsWorkingTimeScheduleRoute,
  postUsersUserIdSolutionsWorkingTimeScheduleEndWorkingTimeRoute,
  postUsersUserIdSolutionsWorkingTimeScheduleStartWorkingTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserSolutionRootHandler = app
  .openapi(getUsersUserIdSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSolutionsWorkingTimeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdSolutionsWorkingTimeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdSolutionsWorkingTimeScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSolutionsWorkingTimeScheduleEndWorkingTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSolutionsWorkingTimeScheduleStartWorkingTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
