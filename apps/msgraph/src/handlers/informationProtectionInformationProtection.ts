import { OpenAPIHono } from '@hono/zod-openapi'
import { getInformationProtectionRoute, patchInformationProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const informationProtectionInformationProtectionHandler = app
  .openapi(getInformationProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInformationProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
