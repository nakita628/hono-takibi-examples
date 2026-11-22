import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRoute } from '../routes'

const app = new OpenAPIHono()

export const twoStepVerificationHandler = app.openapi(
  postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRoute,
  (c) => {},
)
