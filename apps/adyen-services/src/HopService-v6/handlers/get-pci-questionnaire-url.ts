import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetPciQuestionnaireUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const getPciQuestionnaireUrlHandler = app.openapi(postGetPciQuestionnaireUrlRoute, (c) => {
  throw new Error('Not implemented')
})
