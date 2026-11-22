import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1GenevaActionsConfigurationTargetKeyRoute,
  getApiV1GenevaActionsConfigurationTargetKeyRoute,
  postApiV1GenevaActionsConfigurationTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(postApiV1GenevaActionsConfigurationTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GenevaActionsConfigurationTargetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsConfigurationTargetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
