import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdRoute,
  getRestApi3AvatarTypeSystemRoute,
  getRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute,
  getRestApi3UniversalAvatarViewTypeTypeAvatarIdRoute,
  getRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdRoute,
  getRestApi3UniversalAvatarViewTypeTypeRoute,
  postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const avatarsHandler = app
  .openapi(getRestApi3AvatarTypeSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3UniversalAvatarTypeTypeOwnerEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarViewTypeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarViewTypeTypeAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
