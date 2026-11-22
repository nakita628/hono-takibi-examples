import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UsersMeLimitsRoute,
  getV2UsersMeUsageMonthlyRoute,
  getV2UsersUserIdLimitsRoute,
  getV2UsersUserIdUsageMonthlyRoute,
  putV2UsersMeLimitsRoute,
  putV2UsersUserIdLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUsageHandler = app
  .openapi(getV2UsersMeUsageMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersMeLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UsersMeLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdUsageMonthlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UsersUserIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UsersUserIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
