import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ProjectsProjectKeyLayersRoute,
  patchApiV2ProjectsProjectKeyLayersLayerKeyRoute,
  postApiV2ProjectsProjectKeyLayersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const layersHandler = app
  .openapi(getApiV2ProjectsProjectKeyLayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyLayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyLayersLayerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
