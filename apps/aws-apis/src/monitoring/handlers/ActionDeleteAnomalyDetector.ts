import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteAnomalyDetectorRoute,
  postActionDeleteAnomalyDetectorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteAnomalyDetectorHandler = app
  .openapi(getActionDeleteAnomalyDetectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAnomalyDetectorRoute, (c) => {
    throw new Error('Not implemented')
  })
