import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BatchesIdRoute,
  getV2BatchesRoute,
  postV2AudioTranscriptionsRoute,
  postV2BatchesIdCancelRoute,
  postV2BatchesRoute,
  postV2ChatRoute,
  postV2EmbedRoute,
  postV2ParseRoute,
  postV2RerankRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BatchesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RerankRoute, (c) => {
    throw new Error('Not implemented')
  })
