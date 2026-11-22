import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FinetuningFinetunedModelsIdRoute,
  getV1FinetuningFinetunedModelsFinetunedModelIdEventsRoute,
  getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRoute,
  getV1FinetuningFinetunedModelsIdRoute,
  getV1FinetuningFinetunedModelsRoute,
  patchV1FinetuningFinetunedModelsIdRoute,
  postV1FinetuningFinetunedModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const finetuningHandler = app
  .openapi(getV1FinetuningFinetunedModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FinetuningFinetunedModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1FinetuningFinetunedModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FinetuningFinetunedModelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsFinetunedModelIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
