import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessApproveSkillRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessApproveSkillHandler = app.openapi(
  postXAmzTargetAlexaForBusinessApproveSkillRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
