import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PartialsPartialKeyRoute,
  getV1PartialsPartialKeyRoute,
  getV1PartialsRoute,
  postV1PartialsPreviewRoute,
  putV1PartialsPartialKeyDiscardRoute,
  putV1PartialsPartialKeyRoute,
  putV1PartialsPartialKeyUnarchiveRoute,
  putV1PartialsPartialKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partialsHandler = app
  .openapi(putV1PartialsPartialKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PartialsPartialKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PartialsPartialKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PartialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyDiscardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PartialsPartialKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartialsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
