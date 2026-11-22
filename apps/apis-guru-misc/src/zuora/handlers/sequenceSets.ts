import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SequenceSetsIdRoute,
  getV1SequenceSetsIdRoute,
  getV1SequenceSetsRoute,
  postV1SequenceSetsRoute,
  putV1SequenceSetsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sequenceSetsHandler = app
  .openapi(getV1SequenceSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SequenceSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SequenceSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SequenceSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SequenceSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
