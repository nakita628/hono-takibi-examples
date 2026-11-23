import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUseridPhotoRoute, getUsersUsernameRoute } from './routes'
import { getUsersUseridPhotoRouteHandler, getUsersUsernameRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUsersUsernameRoute, getUsersUsernameRouteHandler)
  .openapi(getUsersUseridPhotoRoute, getUsersUseridPhotoRouteHandler)

export default app
