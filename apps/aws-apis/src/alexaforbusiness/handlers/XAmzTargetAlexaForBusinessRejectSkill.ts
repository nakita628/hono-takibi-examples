import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessRejectSkillRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessRejectSkillHandler = app.openapi(
  postXAmzTargetAlexaForBusinessRejectSkillRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
