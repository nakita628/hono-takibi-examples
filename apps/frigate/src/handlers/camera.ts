import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putCameraCameraNameSetFeatureRoute,
  putCameraCameraNameSetFeatureSubCommandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cameraHandler = app
  .openapi(putCameraCameraNameSetFeatureSubCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCameraCameraNameSetFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
