import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLanguagesRoute,
  postDetectRoute,
  postTranslateFileRoute,
  postTranslateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translateHandler = app
  .openapi(postDetectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTranslateFileRoute, (c) => {
    throw new Error('Not implemented')
  })
