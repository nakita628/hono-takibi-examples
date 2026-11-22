import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdPredictionsRoute,
  postProjectsProjectIdPredictionsQueryRoute,
  postProjectsProjectIdQuicktestImageRoute,
  postProjectsProjectIdQuicktestUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const predictionsApiHandler = app
  .openapi(deleteProjectsProjectIdPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdPredictionsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdQuicktestImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdQuicktestUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
