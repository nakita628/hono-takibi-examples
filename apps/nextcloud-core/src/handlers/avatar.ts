import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpAvatarUserIdSizeDarkRoute, getIndexPhpAvatarUserIdSizeRoute } from '../routes'

const app = new OpenAPIHono()

export const avatarHandler = app
  .openapi(getIndexPhpAvatarUserIdSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAvatarUserIdSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
