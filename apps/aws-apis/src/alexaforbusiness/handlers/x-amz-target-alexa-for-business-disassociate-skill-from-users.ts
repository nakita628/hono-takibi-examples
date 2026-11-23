import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateSkillFromUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDisassociateSkillFromUsersHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateSkillFromUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
