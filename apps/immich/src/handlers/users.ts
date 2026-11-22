import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersMeLicenseRoute,
  deleteUsersMeOnboardingRoute,
  deleteUsersProfileImageRoute,
  getUsersIdProfileImageRoute,
  getUsersIdRoute,
  getUsersMeCalendarHeatmapRoute,
  getUsersMeLicenseRoute,
  getUsersMeOnboardingRoute,
  getUsersMePreferencesRoute,
  getUsersMeRoute,
  getUsersRoute,
  postUsersProfileImageRoute,
  putUsersMeLicenseRoute,
  putUsersMeOnboardingRoute,
  putUsersMePreferencesRoute,
  putUsersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeCalendarHeatmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeOnboardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
