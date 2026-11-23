import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteSkillAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDeleteSkillAuthorizationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteSkillAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
