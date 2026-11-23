import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePresetsIdRoute,
  deletePresetsRoute,
  getPresetsIdRoute,
  getPresetsRoute,
  patchPresetsIdRoute,
  patchPresetsRoute,
  postPresetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const presetsHandler = app
  .openapi(getPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPresetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePresetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
