import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ChatRoute,
  postV1CheckApiKeyRoute,
  postV1ClassifyRoute,
  postV1DetokenizeRoute,
  postV1EmbedRoute,
  postV1GenerateRoute,
  postV1RerankRoute,
  postV1SummarizeRoute,
  postV1TokenizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RerankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SummarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DetokenizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CheckApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
