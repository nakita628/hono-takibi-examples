import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSubracesIndexProficienciesRoute,
  getApiSubracesIndexRoute,
  getApiSubracesIndexTraitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subracesHandler = app
  .openapi(getApiSubracesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubracesIndexProficienciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubracesIndexTraitsRoute, (c) => {
    throw new Error('Not implemented')
  })
