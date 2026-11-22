import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicV2PromptsPromptNameRoute,
  getApiPublicV2PromptsPromptNameRoute,
  getApiPublicV2PromptsRoute,
  postApiPublicV2PromptsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promptsHandler = app
  .openapi(getApiPublicV2PromptsPromptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicV2PromptsPromptNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicV2PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
