import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessPutSkillAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessPutSkillAuthorizationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessPutSkillAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
