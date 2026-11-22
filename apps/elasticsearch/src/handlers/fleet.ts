import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFleetFleetMsearchRoute,
  getIndexFleetFleetMsearchRoute,
  getIndexFleetFleetSearchRoute,
  getIndexFleetGlobalCheckpointsRoute,
  postFleetFleetMsearchRoute,
  postIndexFleetFleetMsearchRoute,
  postIndexFleetFleetSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fleetHandler = app
  .openapi(getIndexFleetGlobalCheckpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFleetFleetMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFleetFleetMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFleetFleetMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexFleetFleetMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFleetFleetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexFleetFleetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
