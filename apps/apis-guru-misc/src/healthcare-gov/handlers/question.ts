import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuestionPageNameMediaTypeExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const questionHandler = app.openapi(getQuestionPageNameMediaTypeExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
