import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV2SelectedCalendarsRoute, postV2SelectedCalendarsRoute } from '../routes'

const app = new OpenAPIHono()

export const selectedCalendarsHandler = app
  .openapi(postV2SelectedCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SelectedCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
