import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
