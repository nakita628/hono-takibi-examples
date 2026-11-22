import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
