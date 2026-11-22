import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNlpAnnotateEntitiesRoute,
  getNlpAnnotateIndexRoute,
  postNlpAnnotateEntitiesRoute,
  postNlpAnnotateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nlpAnnotateHandler = app
  .openapi(getNlpAnnotateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNlpAnnotateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNlpAnnotateEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNlpAnnotateEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
