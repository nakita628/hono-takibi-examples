import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLabelsIdIndexRoute,
  getLabelsIdIndexRoute,
  getLabelsIndexRoute,
  patchLabelsIdIndexRoute,
  postLabelsIndexRoute,
  putLabelsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getLabelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLabelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
