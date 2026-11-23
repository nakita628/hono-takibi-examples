import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessRejectSkillRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessRejectSkillHandler = app.openapi(
  postXAmzTargetAlexaForBusinessRejectSkillRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
