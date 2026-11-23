import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getParmaAmbientDoseRoute,
  getParmaDifferentialIntensityRoute,
  getParmaEffectiveDoseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const parmaHandler = app
  .openapi(getParmaAmbientDoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getParmaDifferentialIntensityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getParmaEffectiveDoseRoute, (c) => {
    throw new Error('Not implemented')
  })
