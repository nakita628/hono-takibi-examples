import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminJobsTriggerInferenceRoute,
  postAdminJobsTriggerRecrawlRoute,
  postAdminJobsTriggerReindexRoute,
  putAdminUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(putAdminUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminJobsTriggerRecrawlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminJobsTriggerReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminJobsTriggerInferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
