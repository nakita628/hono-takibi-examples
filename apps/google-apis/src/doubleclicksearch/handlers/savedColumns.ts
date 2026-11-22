import { OpenAPIHono } from '@hono/zod-openapi'
import { getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRoute } from '../routes'

const app = new OpenAPIHono()

export const savedColumnsHandler = app.openapi(
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
