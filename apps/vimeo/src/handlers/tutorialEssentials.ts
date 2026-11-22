import { OpenAPIHono } from '@hono/zod-openapi'
import { getTutorialRoute } from '../routes'

const app = new OpenAPIHono()

export const tutorialEssentialsHandler = app.openapi(getTutorialRoute, (c) => {
  throw new Error('Not implemented')
})
