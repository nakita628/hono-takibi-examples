import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSettingsBillingCreditsRoute,
  getApiSettingsBillingUsageByInferenceSessionRoute,
  getApiSettingsBillingUsageJobsRoute,
  getApiSettingsMcpRoute,
  getApiSettingsRepositoriesRoute,
  getApiUsersUsernameAvatarRoute,
  getApiUsersUsernameFollowersRoute,
  getApiUsersUsernameFollowingOrgsRoute,
  getApiUsersUsernameFollowingRoute,
  getApiUsersUsernameLikesRoute,
  getApiUsersUsernameOverviewRoute,
  getApiUsersUsernameSocialsRoute,
  postApiSettingsBillingPrepaidCreditsPurchaseLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiSettingsMcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSettingsBillingPrepaidCreditsPurchaseLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBillingUsageByInferenceSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSettingsBillingUsageJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameSocialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsernameFollowingOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
