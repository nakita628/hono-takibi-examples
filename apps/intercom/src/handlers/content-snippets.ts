import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContentSnippetsContentSnippetIdTagsIdRoute,
  deleteContentSnippetsIdRoute,
  getContentSnippetsIdRoute,
  getContentSnippetsRoute,
  postContentSnippetsContentSnippetIdTagsRoute,
  postContentSnippetsRoute,
  putContentSnippetsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentSnippetsHandler = app
  .openapi(getContentSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContentSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentSnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContentSnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContentSnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContentSnippetsContentSnippetIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContentSnippetsContentSnippetIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
