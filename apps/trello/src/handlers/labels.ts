import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLabelsIdRoute,
  getLabelsIdRoute,
  postLabelsRoute,
  putLabelsIdFieldRoute,
  putLabelsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
