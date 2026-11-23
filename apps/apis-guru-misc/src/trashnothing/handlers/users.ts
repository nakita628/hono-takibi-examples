import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersMeAlertsAlertIdRoute,
  deleteUsersUserIdFeedbackRoute,
  getUsersMeAlertsRoute,
  getUsersMeGroupsRoute,
  getUsersMeNoticesRoute,
  getUsersMePostLocationsRoute,
  getUsersMePostsRoute,
  getUsersMePostsSearchRoute,
  getUsersMeProfileImagesRoute,
  getUsersMeRoute,
  getUsersUserIdDisplayRoute,
  getUsersUserIdPostsRoute,
  getUsersUserIdPostsSearchRoute,
  getUsersUserIdProfileImageRoute,
  getUsersUserIdRoute,
  postUsersMeEmailRoute,
  postUsersMeProfileImageRoute,
  postUsersMeResendVerificationRoute,
  postUsersMeResetPasswordRoute,
  postUsersReportRoute,
  postUsersUserIdFeedbackRoute,
  putUsersMeAlertsRoute,
  putUsersMeEmailNotBouncingRoute,
  putUsersMeLocationRoute,
  putUsersMePostLocationsRoute,
  putUsersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeEmailNotBouncingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeNoticesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMePostLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMePostLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMePostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMePostsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeProfileImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeResendVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPostsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
