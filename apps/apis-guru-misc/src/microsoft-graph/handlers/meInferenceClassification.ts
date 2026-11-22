import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
  getMeInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
  getMeInferenceClassificationOverridesRoute,
  getMeInferenceClassificationRoute,
  patchMeInferenceClassificationOverridesInferenceClassificationOverrideIdRoute,
  patchMeInferenceClassificationRoute,
  postMeInferenceClassificationOverridesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meInferenceClassificationHandler = app
  .openapi(getMeInferenceClassificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeInferenceClassificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInferenceClassificationOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeInferenceClassificationOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeInferenceClassificationOverridesInferenceClassificationOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeInferenceClassificationOverridesInferenceClassificationOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeInferenceClassificationOverridesInferenceClassificationOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
