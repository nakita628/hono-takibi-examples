import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateSkillWithUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessAssociateSkillWithUsersHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateSkillWithUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
