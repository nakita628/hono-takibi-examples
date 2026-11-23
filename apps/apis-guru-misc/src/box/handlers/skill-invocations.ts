import { OpenAPIHono } from '@hono/zod-openapi'
import { putSkillInvocationsSkillIdRoute } from '../routes'

const app = new OpenAPIHono()

export const skillInvocationsHandler = app.openapi(putSkillInvocationsSkillIdRoute, (c) => {
  throw new Error('Not implemented')
})
