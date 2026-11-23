import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessPutRoomSkillParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessPutRoomSkillParameterHandler = app.openapi(
  postXAmzTargetAlexaForBusinessPutRoomSkillParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
