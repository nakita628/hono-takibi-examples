import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteRoomSkillParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessDeleteRoomSkillParameterHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteRoomSkillParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
