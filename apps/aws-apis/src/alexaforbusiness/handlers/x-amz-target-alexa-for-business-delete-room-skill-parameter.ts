import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessDeleteRoomSkillParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessDeleteRoomSkillParameterHandler = app.openapi(
  postXAmzTargetAlexaForBusinessDeleteRoomSkillParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
