import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvatarItemIdRoute, postAvatarRoute } from '../routes'

const app = new OpenAPIHono()

export const avatarHandler = app
  .openapi(postAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
