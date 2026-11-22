import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRoute,
  getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRoute,
  postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const avatarHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
