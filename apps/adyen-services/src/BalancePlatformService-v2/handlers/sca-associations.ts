import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScaAssociationsRoute,
  getScaAssociationsRoute,
  patchScaAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scaAssociationsHandler = app
  .openapi(getScaAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScaAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScaAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
