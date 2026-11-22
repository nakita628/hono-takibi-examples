import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatPrioritiesPriorityIdRoute,
  getApiV1LivechatPrioritiesResetRoute,
  getApiV1LivechatPrioritiesRoute,
  postApiV1LivechatPrioritiesResetRoute,
  putApiV1LivechatPrioritiesPriorityIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelPrioritiesHandler = app
  .openapi(getApiV1LivechatPrioritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatPrioritiesPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatPrioritiesPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatPrioritiesResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatPrioritiesResetRoute, (c) => {
    throw new Error('Not implemented')
  })
