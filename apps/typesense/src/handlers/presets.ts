import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePresetsPresetIdRoute,
  getPresetsPresetIdRoute,
  getPresetsRoute,
  putPresetsPresetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const presetsHandler = app
  .openapi(getPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
