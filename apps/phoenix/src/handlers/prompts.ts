import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PromptsPromptIdentifierRoute,
  deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute,
  getV1PromptsPromptIdentifierLatestRoute,
  getV1PromptsPromptIdentifierTagsTagNameRoute,
  getV1PromptsPromptIdentifierVersionsRoute,
  getV1PromptsRoute,
  getV1PromptVersionsPromptVersionIdRoute,
  getV1PromptVersionsPromptVersionIdTagsRoute,
  patchV1PromptsPromptIdentifierRoute,
  postV1PromptsPromptIdentifierVersionsRoute,
  postV1PromptsRoute,
  postV1PromptVersionsPromptVersionIdTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promptsHandler = app
  .openapi(getV1PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsPromptIdentifierVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromptsPromptIdentifierVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptVersionsPromptVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsPromptIdentifierTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptsPromptIdentifierLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromptVersionsPromptVersionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PromptVersionsPromptVersionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PromptVersionsPromptVersionIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PromptsPromptIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PromptsPromptIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
