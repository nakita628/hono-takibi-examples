import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProducersIdExternalRoute,
  getProducersIdFullRoute,
  getProducersIdRoute,
  getProducersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const producersHandler = app
  .openapi(getProducersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProducersIdFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProducersIdExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProducersRoute, (c) => {
    throw new Error('Not implemented')
  })
