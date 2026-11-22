import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
