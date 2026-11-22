import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ExperimentsIdVisualChangesetsRoute,
  getV1VisualChangesetsIdRoute,
  postV1ExperimentsIdVisualChangesetsRoute,
  postV1VisualChangesetsIdVisualChangeRoute,
  putV1VisualChangesetsIdRoute,
  putV1VisualChangesetsIdVisualChangeVisualChangeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const visualChangesetsHandler = app
  .openapi(getV1ExperimentsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VisualChangesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1VisualChangesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VisualChangesetsIdVisualChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1VisualChangesetsIdVisualChangeVisualChangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
