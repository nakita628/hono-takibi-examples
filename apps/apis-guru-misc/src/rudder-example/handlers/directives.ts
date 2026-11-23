import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectivesDirectiveIdRoute,
  getDirectivesDirectiveIdRoute,
  getDirectivesRoute,
  postDirectivesDirectiveIdCheckRoute,
  postDirectivesDirectiveIdRoute,
  putDirectivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directivesHandler = app
  .openapi(getDirectivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDirectivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectivesDirectiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectivesDirectiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectivesDirectiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectivesDirectiveIdCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
