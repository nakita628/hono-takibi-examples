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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1LexiconsLexiconNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LexiconsLexiconNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LexiconsLexiconNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SynthesisTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LexiconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SynthesisTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SynthesisTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
