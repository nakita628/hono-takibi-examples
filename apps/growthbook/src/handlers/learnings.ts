import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1LearningsIdRoute,
  getV1LearningsIdRoute,
  getV1LearningsRoute,
  postV1LearningsRoute,
  postV1LearningsSearchRoute,
  putV1LearningsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const learningsHandler = app
  .openapi(getV1LearningsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1LearningsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LearningsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LearningsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
