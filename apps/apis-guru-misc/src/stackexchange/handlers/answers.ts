import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnswersIdsCommentsRoute, getAnswersIdsRoute, getAnswersRoute } from '../routes'

const app = new OpenAPIHono()

export const answersHandler = app
  .openapi(getAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnswersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnswersIdsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
