import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrainerTypesRoute, getTrainerTypesTrainerTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const trainerTypesHandler = app
  .openapi(getTrainerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrainerTypesTrainerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
