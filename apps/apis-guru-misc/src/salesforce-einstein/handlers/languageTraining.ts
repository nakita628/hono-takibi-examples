import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2LanguageTrainModelIdRoute,
  postV2LanguageRetrainRoute,
  postV2LanguageTrainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languageTrainingHandler = app
  .openapi(postV2LanguageRetrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LanguageTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguageTrainModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
