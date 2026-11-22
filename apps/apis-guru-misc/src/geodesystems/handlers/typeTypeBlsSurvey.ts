import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeBlsSurveyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeBlsSurveyHandler = app.openapi(
  getRepositorySearchTypeTypeBlsSurveyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
