import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1beta1DocumentsAnalyzeEntitiesRoute,
  postV1beta1DocumentsAnalyzeSentimentRoute,
  postV1beta1DocumentsAnalyzeSyntaxRoute,
  postV1beta1DocumentsAnnotateTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postV1beta1DocumentsAnalyzeEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1DocumentsAnalyzeSentimentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1DocumentsAnalyzeSyntaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1DocumentsAnnotateTextRoute, (c) => {
    throw new Error('Not implemented')
  })
