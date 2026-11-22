import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
