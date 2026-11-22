import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetInstanceTypesFromInstanceRequirementsRoute,
  postActionGetInstanceTypesFromInstanceRequirementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetInstanceTypesFromInstanceRequirementsHandler = app
  .openapi(getActionGetInstanceTypesFromInstanceRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetInstanceTypesFromInstanceRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
