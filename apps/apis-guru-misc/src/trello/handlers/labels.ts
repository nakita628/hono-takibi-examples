import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLabelsIdLabelRoute,
  getLabelsIdLabelBoardFieldRoute,
  getLabelsIdLabelBoardRoute,
  getLabelsIdLabelRoute,
  postLabelsRoute,
  putLabelsIdLabelColorRoute,
  putLabelsIdLabelNameRoute,
  putLabelsIdLabelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(postLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsIdLabelBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsIdLabelBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsIdLabelColorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsIdLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
