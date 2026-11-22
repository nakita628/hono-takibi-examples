import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ShieldSvgRoute,
  getApiV1SmtpCheckRoute,
  getApiV1SpotlightRoute,
  postApiV1FingerprintRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ShieldSvgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SpotlightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SmtpCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
