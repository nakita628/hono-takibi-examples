import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDetectStackResourceDriftRoute,
  postActionDetectStackResourceDriftRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDetectStackResourceDriftHandler = app
  .openapi(getActionDetectStackResourceDriftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetectStackResourceDriftRoute, (c) => {
    throw new Error('Not implemented')
  })
