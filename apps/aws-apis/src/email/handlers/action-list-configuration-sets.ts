import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListConfigurationSetsRoute,
  postActionListConfigurationSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListConfigurationSetsHandler = app
  .openapi(getActionListConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
