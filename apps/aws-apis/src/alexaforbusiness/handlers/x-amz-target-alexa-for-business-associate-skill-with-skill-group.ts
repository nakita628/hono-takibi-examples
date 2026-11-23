import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
