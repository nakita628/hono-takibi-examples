import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListSkillsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListSkillsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListSkillsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
