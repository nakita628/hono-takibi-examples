import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
  putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
  putApiDataentitiesAcronymDocumentsIdScoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scoreHandler = app
  .openapi(putApiDataentitiesAcronymDocumentsIdScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
