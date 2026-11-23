import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCari7AmbientDoseRoute,
  getCari7EffectiveDoseRoute,
  getParmaAmbientDoseRoute,
  getParmaDifferentialIntensityRoute,
  getParmaEffectiveDoseRoute,
  getRouteAmbientDoseRoute,
  getRouteEffectiveDoseRoute,
} from './routes'
import {
  getCari7AmbientDoseRouteHandler,
  getCari7EffectiveDoseRouteHandler,
  getParmaAmbientDoseRouteHandler,
  getParmaDifferentialIntensityRouteHandler,
  getParmaEffectiveDoseRouteHandler,
  getRouteAmbientDoseRouteHandler,
  getRouteEffectiveDoseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCari7AmbientDoseRoute, getCari7AmbientDoseRouteHandler)
  .openapi(getCari7EffectiveDoseRoute, getCari7EffectiveDoseRouteHandler)
  .openapi(getParmaAmbientDoseRoute, getParmaAmbientDoseRouteHandler)
  .openapi(getParmaDifferentialIntensityRoute, getParmaDifferentialIntensityRouteHandler)
  .openapi(getParmaEffectiveDoseRoute, getParmaEffectiveDoseRouteHandler)
  .openapi(getRouteAmbientDoseRoute, getRouteAmbientDoseRouteHandler)
  .openapi(getRouteEffectiveDoseRoute, getRouteEffectiveDoseRouteHandler)

export default app
