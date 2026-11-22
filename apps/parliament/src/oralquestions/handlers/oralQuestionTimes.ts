import { OpenAPIHono } from '@hono/zod-openapi'
import { getOralquestiontimesListRoute } from '../routes'

const app = new OpenAPIHono()

export const oralQuestionTimesHandler = app.openapi(getOralquestiontimesListRoute, (c) => {
  throw new Error('Not implemented')
})
