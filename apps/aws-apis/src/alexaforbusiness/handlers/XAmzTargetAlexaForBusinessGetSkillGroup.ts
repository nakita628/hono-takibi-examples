import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
