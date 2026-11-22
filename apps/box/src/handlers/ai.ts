import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAiAgentDefaultRoute,
  postAiAskRoute,
  postAiExtractRoute,
  postAiExtractStructuredRoute,
  postAiTextGenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiHandler = app
  .openapi(postAiAskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiTextGenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAgentDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiExtractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiExtractStructuredRoute, (c) => {
    throw new Error('Not implemented')
  })
