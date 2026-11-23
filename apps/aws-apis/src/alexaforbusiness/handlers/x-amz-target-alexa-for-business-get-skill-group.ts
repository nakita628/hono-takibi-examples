import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessGetSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
