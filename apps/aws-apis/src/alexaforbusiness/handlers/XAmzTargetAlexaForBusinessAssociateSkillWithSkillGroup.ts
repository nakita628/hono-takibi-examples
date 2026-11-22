import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
