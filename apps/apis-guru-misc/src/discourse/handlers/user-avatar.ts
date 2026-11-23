import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserAvatarUsernameRefreshGravatarJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const userAvatarHandler = app.openapi(
  postUserAvatarUsernameRefreshGravatarJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
