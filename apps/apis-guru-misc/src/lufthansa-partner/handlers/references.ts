import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferencesSeatdetailsAircraftCodeCabinCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const referencesHandler = app.openapi(
  getReferencesSeatdetailsAircraftCodeCabinCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
