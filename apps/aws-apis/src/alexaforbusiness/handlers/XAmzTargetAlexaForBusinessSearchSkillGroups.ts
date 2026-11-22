import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchSkillGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessSearchSkillGroupsHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchSkillGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
