import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivatePromptsIdRoute,
  getV1PrivatePromptsByCommitCommitRoute,
  getV1PrivatePromptsIdRoute,
  getV1PrivatePromptsIdVersionsRoute,
  getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRoute,
  getV1PrivatePromptsRoute,
  getV1PrivatePromptsVersionsVersionIdRoute,
  patchV1PrivatePromptsVersionsRoute,
  patchV1PrivatePromptsVersionsVersionIdEnvironmentsRoute,
  postV1PrivatePromptsDeleteRoute,
  postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRoute,
  postV1PrivatePromptsRetrieveByCommitsRoute,
  postV1PrivatePromptsRoute,
  postV1PrivatePromptsVersionsRetrieveByIdsRoute,
  postV1PrivatePromptsVersionsRetrieveRoute,
  postV1PrivatePromptsVersionsRoute,
  putV1PrivatePromptsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promptsHandler = app
  .openapi(getV1PrivatePromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivatePromptsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivatePromptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivatePromptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsByCommitCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivatePromptsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsRetrieveByCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsVersionsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivatePromptsVersionsRetrieveByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivatePromptsVersionsVersionIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
