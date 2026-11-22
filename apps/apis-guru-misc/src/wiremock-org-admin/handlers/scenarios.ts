import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminScenariosRoute, postAdminScenariosResetRoute } from '../routes'

const app = new OpenAPIHono()

export const scenariosHandler = app
  .openapi(getAdminScenariosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminScenariosResetRoute, (c) => {
    throw new Error('Not implemented')
  })
