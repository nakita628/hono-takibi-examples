import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCommentsAddReactionRoute,
  postCommentsCreateRoute,
  postCommentsDeleteRoute,
  postCommentsInfoRoute,
  postCommentsListRoute,
  postCommentsRemoveReactionRoute,
  postCommentsResolveRoute,
  postCommentsUnresolveRoute,
  postCommentsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(postCommentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsUnresolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsAddReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsRemoveReactionRoute, (c) => {
    throw new Error('Not implemented')
  })
