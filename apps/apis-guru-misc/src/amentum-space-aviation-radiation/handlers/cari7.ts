import { OpenAPIHono } from '@hono/zod-openapi'
import { getCari7AmbientDoseRoute, getCari7EffectiveDoseRoute } from '../routes'

const app = new OpenAPIHono()

export const cari7Handler = app
  .openapi(getCari7AmbientDoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCari7EffectiveDoseRoute, (c) => {
    throw new Error('Not implemented')
  })
