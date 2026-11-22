import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteSkillAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteSkillAuthorizationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteSkillAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
