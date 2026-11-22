import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2UsersUserIdPasswordRequirementsRoute,
  postApiV2UsersUserIdPasswordRoute,
  putApiV2UsersUserIdPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userPasswordsHandler = app
  .openapi(postApiV2UsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdPasswordRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
