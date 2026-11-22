import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferencesSeatdetailsAircraftCodeCabinCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceDataHandler = app.openapi(
  getReferencesSeatdetailsAircraftCodeCabinCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
