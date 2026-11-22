import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAvatarsBrowsersCodeRoute,
  getAvatarsCreditCardsCodeRoute,
  getAvatarsFaviconRoute,
  getAvatarsFlagsCodeRoute,
  getAvatarsImageRoute,
  getAvatarsInitialsRoute,
  getAvatarsQrRoute,
} from '../routes'

const app = new OpenAPIHono()

export const avatarsHandler = app
  .openapi(getAvatarsBrowsersCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarsCreditCardsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarsFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarsFlagsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarsImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarsInitialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvatarsQrRoute, (c) => {
    throw new Error('Not implemented')
  })
