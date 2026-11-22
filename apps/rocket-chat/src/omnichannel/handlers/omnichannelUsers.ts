import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatUsersTypeIdRoute,
  getApiV1LivechatUsersTypeIdRoute,
  getApiV1LivechatUsersTypeRoute,
  postApiV1LivechatUsersTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelUsersHandler = app
  .openapi(postApiV1LivechatUsersTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUsersTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUsersTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatUsersTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
