import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV2LoggingLevelTargetTypeTargetNameRoute } from '../routes'

const app = new OpenAPIHono()

export const v2LoggingLevelTargetTypeTargetNameHandler = app.openapi(
  deleteV2LoggingLevelTargetTypeTargetNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
