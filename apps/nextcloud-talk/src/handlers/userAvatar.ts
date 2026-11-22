import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedTempUserAvatarRoute,
  postOcsV2PhpAppsSpreedTempUserAvatarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAvatarHandler = app
  .openapi(postOcsV2PhpAppsSpreedTempUserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedTempUserAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
