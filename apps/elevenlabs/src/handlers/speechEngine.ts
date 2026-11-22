import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SpeechEngineSpeechEngineIdRoute,
  getV1SpeechEngineRoute,
  getV1SpeechEngineSpeechEngineIdRoute,
  patchV1SpeechEngineSpeechEngineIdRoute,
  postV1SpeechEngineRoute,
  postV1SpeechEngineSpeechEngineIdDuplicateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const speechEngineHandler = app
  .openapi(getV1SpeechEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeechEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpeechEngineSpeechEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SpeechEngineSpeechEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SpeechEngineSpeechEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpeechEngineSpeechEngineIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
