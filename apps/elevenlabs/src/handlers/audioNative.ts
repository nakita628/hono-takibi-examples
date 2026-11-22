import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AudioNativeProjectIdSettingsRoute,
  postV1AudioNativeContentRoute,
  postV1AudioNativeProjectIdContentRoute,
  postV1AudioNativeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioNativeHandler = app
  .openapi(postV1AudioNativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudioNativeProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioNativeProjectIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudioNativeContentRoute, (c) => {
    throw new Error('Not implemented')
  })
