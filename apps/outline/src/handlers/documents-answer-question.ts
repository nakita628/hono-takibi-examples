import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsAnswerQuestionRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsAnswerQuestionHandler = app.openapi(postDocumentsAnswerQuestionRoute, (c) => {
  throw new Error('Not implemented')
})
