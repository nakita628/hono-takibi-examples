import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAvatarGuestGuestNameSizeDarkRoute,
  getIndexPhpAvatarGuestGuestNameSizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestAvatarHandler = app
  .openapi(getIndexPhpAvatarGuestGuestNameSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAvatarGuestGuestNameSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
