import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRadarListsTypeActionRoute,
  postRadarAttemptsRoute,
  postRadarListsTypeActionRoute,
  putRadarAttemptsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarHandler = app
  .openapi(postRadarAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRadarAttemptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRadarListsTypeActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRadarListsTypeActionRoute, (c) => {
    throw new Error('Not implemented')
  })
