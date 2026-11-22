import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdSnippetsSnippetIdRoute,
  deleteApiV4SnippetsIdRoute,
  getApiV4ProjectsIdSnippetsRoute,
  getApiV4ProjectsIdSnippetsSnippetIdFilesRefFilePathRawRoute,
  getApiV4ProjectsIdSnippetsSnippetIdRawRoute,
  getApiV4ProjectsIdSnippetsSnippetIdRoute,
  getApiV4ProjectsIdSnippetsSnippetIdUserAgentDetailRoute,
  getApiV4SnippetsAllRoute,
  getApiV4SnippetsIdFilesRefFilePathRawRoute,
  getApiV4SnippetsIdRawRoute,
  getApiV4SnippetsIdRoute,
  getApiV4SnippetsIdUserAgentDetailRoute,
  getApiV4SnippetsPublicRoute,
  getApiV4SnippetsRoute,
  postApiV4ProjectsIdSnippetsRoute,
  postApiV4SnippetsRoute,
  putApiV4ProjectsIdSnippetsSnippetIdRoute,
  putApiV4SnippetsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snippetsHandler = app
  .openapi(getApiV4SnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4SnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4SnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4SnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsIdRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsIdFilesRefFilePathRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4SnippetsIdUserAgentDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdFilesRefFilePathRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdSnippetsSnippetIdUserAgentDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
