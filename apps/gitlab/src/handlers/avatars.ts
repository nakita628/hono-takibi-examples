import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AvatarRoute,
  getApiV4GroupsIdAvatarRoute,
  getApiV4ProjectsIdAvatarRoute,
  putApiV4UserAvatarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const avatarsHandler = app
  .openapi(putApiV4UserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
