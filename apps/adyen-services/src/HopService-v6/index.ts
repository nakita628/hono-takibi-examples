import { OpenAPIHono } from '@hono/zod-openapi'
import { getOnboardingUrlHandler, getPciQuestionnaireUrlHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', getOnboardingUrlHandler).route('/', getPciQuestionnaireUrlHandler)

export default app
