import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLabelsIdRoute,
  getApiLabelsIdRoute,
  getApiLabelsRoute,
  patchApiLabelsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getApiLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
