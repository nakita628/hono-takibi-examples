import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1LexiconsLexiconNameRoute,
  getV1LexiconsLexiconNameRoute,
  getV1LexiconsRoute,
  getV1SynthesisTasksRoute,
  getV1SynthesisTasksTaskIdRoute,
  getV1VoicesRoute,
  postV1SpeechRoute,
  postV1SynthesisTasksRoute,
  putV1LexiconsLexiconNameRoute,
} from './routes'
import {
  deleteV1LexiconsLexiconNameRouteHandler,
  getV1LexiconsLexiconNameRouteHandler,
  getV1LexiconsRouteHandler,
  getV1SynthesisTasksRouteHandler,
  getV1SynthesisTasksTaskIdRouteHandler,
  getV1VoicesRouteHandler,
  postV1SpeechRouteHandler,
  postV1SynthesisTasksRouteHandler,
  putV1LexiconsLexiconNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1LexiconsLexiconNameRoute, deleteV1LexiconsLexiconNameRouteHandler)
  .openapi(getV1LexiconsLexiconNameRoute, getV1LexiconsLexiconNameRouteHandler)
  .openapi(putV1LexiconsLexiconNameRoute, putV1LexiconsLexiconNameRouteHandler)
  .openapi(getV1VoicesRoute, getV1VoicesRouteHandler)
  .openapi(getV1SynthesisTasksTaskIdRoute, getV1SynthesisTasksTaskIdRouteHandler)
  .openapi(getV1LexiconsRoute, getV1LexiconsRouteHandler)
  .openapi(getV1SynthesisTasksRoute, getV1SynthesisTasksRouteHandler)
  .openapi(postV1SynthesisTasksRoute, postV1SynthesisTasksRouteHandler)
  .openapi(postV1SpeechRoute, postV1SpeechRouteHandler)

export default app
