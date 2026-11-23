import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExperimentTemplatesIdRoute,
  getExperimentTemplatesIdRoute,
  getExperimentTemplatesRoute,
  patchExperimentTemplatesIdRoute,
  postExperimentTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentTemplatesHandler = app
  .openapi(postExperimentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExperimentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
