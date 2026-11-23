import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPastWebinarsWebinarIdFilesRoute,
  getPastWebinarsWebinarIdInstancesRoute,
  getPastWebinarsWebinarIdParticipantsRoute,
  getPastWebinarsWebinarIdPollsRoute,
  getPastWebinarsWebinarIdQaRoute,
  getPastWebinarsWebinarUUIDAbsenteesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pastWebinarsHandler = app
  .openapi(getPastWebinarsWebinarUUIDAbsenteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdQaRoute, (c) => {
    throw new Error('Not implemented')
  })
