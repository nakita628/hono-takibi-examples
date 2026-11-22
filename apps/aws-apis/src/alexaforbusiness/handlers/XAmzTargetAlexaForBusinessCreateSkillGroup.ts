import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessCreateSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessCreateSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessCreateSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
