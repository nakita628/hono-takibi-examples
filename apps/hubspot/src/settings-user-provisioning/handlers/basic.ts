import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsUsers202609Route, postSettingsUsers202609Route } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getSettingsUsers202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsUsers202609Route, (c) => {
    throw new Error('Not implemented')
  })
