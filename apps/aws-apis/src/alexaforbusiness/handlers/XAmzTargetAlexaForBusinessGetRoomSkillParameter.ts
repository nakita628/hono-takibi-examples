import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessGetRoomSkillParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessGetRoomSkillParameterHandler = app.openapi(
  postXAmzTargetAlexaForBusinessGetRoomSkillParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
