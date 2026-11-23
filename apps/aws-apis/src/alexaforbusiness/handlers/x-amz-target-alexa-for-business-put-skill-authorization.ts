import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessPutSkillAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessPutSkillAuthorizationHandler = app.openapi(
  postXAmzTargetAlexaForBusinessPutSkillAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
