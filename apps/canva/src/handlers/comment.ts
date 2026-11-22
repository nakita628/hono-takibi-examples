import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRoute,
  getV1DesignsDesignIdCommentsThreadIdRepliesRoute,
  getV1DesignsDesignIdCommentsThreadIdRoute,
  postV1CommentsRoute,
  postV1DesignsDesignIdCommentsRoute,
  postV1DesignsDesignIdCommentsThreadIdRepliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commentHandler = app
  .openapi(postV1CommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdCommentsThreadIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsDesignIdCommentsThreadIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdCommentsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdCommentsThreadIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsDesignIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
