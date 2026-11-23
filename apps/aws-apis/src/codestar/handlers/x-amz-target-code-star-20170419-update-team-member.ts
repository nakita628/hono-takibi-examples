import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419UpdateTeamMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419UpdateTeamMemberHandler = app.openapi(
  postXAmzTargetCodeStar20170419UpdateTeamMemberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
