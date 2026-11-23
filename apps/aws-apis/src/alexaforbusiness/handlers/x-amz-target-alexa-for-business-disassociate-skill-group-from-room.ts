import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
