import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21CurrentUserNotaryJournalsRoute } from '../routes'

const app = new OpenAPIHono()

export const notaryJournalsHandler = app.openapi(getV21CurrentUserNotaryJournalsRoute, (c) => {
  throw new Error('Not implemented')
})
