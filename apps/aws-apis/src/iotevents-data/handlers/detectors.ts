import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDetectorsDetectorModelNameKeyValuesIndexRoute,
  getDetectorsDetectorModelNameRoute,
  postDetectorsDeleteRoute,
  postDetectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const detectorsHandler = app
  .openapi(postDetectorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDetectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectorsDetectorModelNameKeyValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDetectorsDetectorModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
