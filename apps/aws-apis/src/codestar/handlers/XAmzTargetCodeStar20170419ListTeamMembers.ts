import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419ListTeamMembersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419ListTeamMembersHandler = app.openapi(
  postXAmzTargetCodeStar20170419ListTeamMembersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
