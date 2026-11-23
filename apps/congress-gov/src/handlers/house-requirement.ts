import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHouseRequirementRequirementNumberMatchingCommunicationsRoute,
  getHouseRequirementRequirementNumberRoute,
  getHouseRequirementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const houseRequirementHandler = app
  .openapi(getHouseRequirementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseRequirementRequirementNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseRequirementRequirementNumberMatchingCommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
