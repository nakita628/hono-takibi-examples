import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1alpha1CommentsAnalyzeRoute, postV1alpha1CommentsSuggestscoreRoute } from '../routes'

const app = new OpenAPIHono()

export const v1alpha1Handler = app
  .openapi(postV1alpha1CommentsAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1CommentsSuggestscoreRoute, (c) => {
    throw new Error('Not implemented')
  })
