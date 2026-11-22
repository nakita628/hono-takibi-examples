import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUpdateSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
