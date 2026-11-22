import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicScoresScoreIdRoute,
  getApiPublicV3ScoresRoute,
  postApiPublicScoresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scoresHandler = app
  .openapi(postApiPublicScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicScoresScoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV3ScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
