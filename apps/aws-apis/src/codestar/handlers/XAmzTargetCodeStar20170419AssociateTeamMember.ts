import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419AssociateTeamMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419AssociateTeamMemberHandler = app.openapi(
  postXAmzTargetCodeStar20170419AssociateTeamMemberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
