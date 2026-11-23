import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUpdateSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUpdateSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUpdateSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
