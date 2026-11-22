import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiExternalEngineIdRoute,
  getApiExternalEngineIdRoute,
  getApiExternalEngineRoute,
  postApiExternalEngineIdAnalyseRoute,
  postApiExternalEngineRoute,
  postApiExternalEngineWorkIdRoute,
  postApiExternalEngineWorkRoute,
  putApiExternalEngineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalEngineHandler = app
  .openapi(getApiExternalEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExternalEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExternalEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExternalEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineIdAnalyseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineWorkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalEngineWorkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
