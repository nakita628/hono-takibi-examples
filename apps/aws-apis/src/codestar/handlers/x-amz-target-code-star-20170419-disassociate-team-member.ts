import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419DisassociateTeamMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419DisassociateTeamMemberHandler = app.openapi(
  postXAmzTargetCodeStar20170419DisassociateTeamMemberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
